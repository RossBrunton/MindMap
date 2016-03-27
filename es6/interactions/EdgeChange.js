"use strict";

load.provide("mm.interactions.EdgeChange", (function() {
	let Interaction = load.require("mm.interactions.Interaction");
	let Editor = load.require("mm.Editor");
	
	// Undo events
	Editor.registerUndo("edge_change", (type, arg, graph) => {
		graph.objects.getEdge(arg.id).points = arg.old;
	}, (type, arg, graph) => {
		graph.objects.getEdge(arg.id).points = arg["new"];
	});
	
	Editor.registerUndo("edge_retarget", (type, arg, graph) => {
		graph.objects.getEdge(arg.id).dest = arg.old;
	}, (type, arg, graph) => {
		graph.objects.getEdge(arg.id).dest = arg["new"];
	});
	
	Editor.registerUndo("edge_rehost", (type, arg, graph) => {
		graph.objects.getEdge(arg.id).origin = arg.old;
	}, (type, arg, graph) => {
		graph.objects.getEdge(arg.id).origin = arg["new"];
	});
	
	/** Interactor for handling changing of edges form
	 * 
	 * That is, the points in them, and what they point from/to. It doesn't handle actually editing the content of the
	 *  text or its type.
	 * 
	 * With this class, there is a lot of working around jointjs's stupidities, since this is a place where it came up
	 *  a lot. The big issue is that there is no event fired when the action actually ends. How I hack my way around
	 *  this is by storing the last event, and then when the mouse is released, handling all the stored events.
	 * 
	 * @extends mm.Interaciton
	 */
	return class EdgeChange extends Interaction {
		constructor(interactor, abstractGraph, editor) {
			super(interactor, abstractGraph, editor);
			
			/** We only want the vertices to be change if there is actually a drag. This flag is set when the
			 *  _vertexChangeEvent should be actually listened to.
			 * 
			 * @type boolean
			 * @private
			 */
			this._validMkpoint = false;
			
			/** The edge currently being changed, or null if none are
			 * 
			 * An [edge, jointJS edge] pair.
			 * 
			 * @type array
			 * @private
			 */
			this._editingEdge = null;
		}
		
		async addEdge(renderer, joint, edge) {
			Interaction.prototype.addEdge.call(this, renderer, joint, edge);
			
			// We want to skip the first "change:vertices" event, since we want to make sure the user actually creates
			// it.
			// Putting the mouse down sets this to false, then the first vertex event sets it to true and stops its
			// logic
			let skipped = false;
			
			// The SVG element
			let svgEdge = renderer.getSvgEdge(edge.id);
			
			$(svgEdge).on("mousedown", (e) => {
				// Allways allow changing the vertex if it exists
				this._validMkpoint = edge.points.length > 0;
				
				// Tell the handler for "change:vertices" to skip the first event
				skipped = false;
				
				// If the click is on any of not these elements and we already have a point, stop the event bubbling so
				// we stick with only one point
				if(!$(e.target).hasClass("marker-vertex")
				&& !$(e.target).hasClass("marker-arrowhead")
				&& !$(e.target).hasClass("marker-vertex-remove-area")
				&& !$(e.target).hasClass("marker-vertex-remove")
				&& edge.points.length >= 1
				) {
					e.stopPropagation();
					return;
				}
				
				// And if the user clicks on the label at any time, just abort
				if($(e.target).parents(".labels").length) {
					e.stopPropagation();
					return;
				}
				
				// Remember the edge being edited
				this._editingEdge = [edge, joint];
			});
			
			joint.on("change:vertices", (e, o) => {
				// Only valid to make a point if it is already valid or we skipped the first event
				this._validMkpoint = this._validMkpoint || skipped;
				
				// Okay, now set the "skiped it" to true"
				skipped = true;
				
				// Smooth the edge
				joint.set("connector", {name:"smooth"});
			});
		}
		
		async addCanvas(renderer, node) {
			// Function called when the dragging stops
			let _out = (e) => {
				if(!this._editingEdge) return;
				
				let scale = renderer.getScale()
				let [edge, joint] = this._editingEdge;
				
				
				// This whole section checks if the points have changed!
				// Get the points
				let points = joint.get("vertices").map(x => [x.x / scale, x.y / scale]);
				let oldPoints = edge.points;
				
				// Now check whether there is any change in the points
				let pointsChange = false;
				if(points.length != oldPoints.length) pointsChange = true;
				if(!pointsChange) {
					pointsChange = false;
					for(let i = 0; i < points.length; i ++) {
						if(points[i][0] != oldPoints[i][0] || points[i][1] != oldPoints[i][1]) pointsChange = true;
					}
				}
				
				// Now update the event if the points have changed
				if(pointsChange) {
					if(this._validMkpoint) {
						// We are allowed to create a point
						edge.changePoints(points);
					
						if(this._editor) this._editor.addToUndoStack("edge_change", {id:edge.id, old:oldPoints, "new":edge.points});
						
						this._interactor.rerender();
					}else{
						// If we are not allowed to create a point, remove it by setting the vertices
						joint.set("vertices", edge.points.map(x => {return {x:x[0] * renderer.getScale(), y:x[1] * renderer.getScale()}}));
						joint.set("connector", {name:"normal"});
					}
				}
				
				//Check for a new target
				if("id" in joint.get("target")) {
					// And get the new target
					let newTarget = renderer.getNodeFromJoint(joint.get("target").id);
					
					if(edge.dest != newTarget && newTarget !== undefined) {
						if(newTarget != edge.origin) {
							this._editor.addToUndoStack("edge_retarget", {id:edge.id, old:edge.dest, "new":newTarget});
							edge.dest = newTarget;
						}
						this._interactor.rerender();
					}
				}
				
				// Check for a new origin
				if("id" in joint.get("source")) {
					// Get the new origin
					let newHost = renderer.getNodeFromJoint(joint.get("source").id);
					
					if(edge.origin != newHost && newHost !== undefined) {
						if(newHost != edge.dest) {
							this._editor.addToUndoStack("edge_rehost", {id:edge.id, old:edge.origin, "new":newHost});
							edge.origin = newHost;
						}
						this._interactor.rerender();
					}
				}
				
				this._editingEdge = null;
			};
			
			$(node).on("mouseup", _out);
			$(node).mouseleave(_out);
		}
	};
}));
