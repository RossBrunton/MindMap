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
			
			/** The last event for the jointjs "change:vertices" logic
			 * 
			 * In the form of [edge, event, change object, jointjs object].
			 * 
			 * @type array
			 * @private
			 */
			this._vertexChangeEvent = null;
			/** The last event for the jointjs "change:target" logic
			 * 
			 * In the form of [edge, event, change object, jointjs object].
			 * 
			 * @type array
			 * @private
			 */
			this._vertexRetargetEvent = null;
			/** The last event for the jointjs "change:source" logic
			 * 
			 * In the form of [edge, event, change object, jointjs object].
			 * 
			 * @type array
			 * @private
			 */
			this._vertexRehostEvent = null;
			
			/** We only want the vertices to be change if there is actually a drag. This flag is set when the
			 *  _vertexChangeEvent should be actually listened to.
			 * 
			 * @type boolean
			 * @private
			 */
			this._validMkpoint = false;
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
				
				// Smooth the edge
				// TODO: This doesn't take into account that the edge may not need smoothing
				joint.set("connector", {name:"smooth"});
			});
			
			joint.on("change:vertices", (e, o) => {
				// Only valid to make a point if it is already valid or we skipped the first event
				this._validMkpoint = this._validMkpoint || skipped;
				
				// Okay, now set the "skiped it" to true"
				skipped = true;
				
				// And store the event
				this._vertexChangeEvent = [edge, e, o, joint];
			});
			
			joint.on("change:source", (e, o) => {
				this._vertexRehostEvent = [edge, e, o, joint];
			});
			
			joint.on("change:target", (e, o) => {
				this._vertexRetargetEvent = [edge, e, o, joint];
			});
		}
		
		async addCanvas(renderer, node) {
			// Function called when the dragging stops
			let _out = (e) => {
				if(this._vertexChangeEvent) {
					// Adding or changing the curve point
					let [edge, e, o, joint] = this._vertexChangeEvent;
					let oldVerts = edge.points;
					
					if(this._validMkpoint) {
						edge.changePoints(e.attributes.vertices.map(x => [x.x / renderer.getScale(), x.y / renderer.getScale()]));
					
						if(this._editor) this._editor.addToUndoStack("edge_change", {id:edge.id, old:oldVerts, "new":edge.points});
						
						this._interactor.rerender();
					}else{
						joint.set("vertices", edge.points.map(x => {return {x:x[0] * renderer.getScale(), y:x[1] * renderer.getScale()}}));
					}
					
					this._vertexChangeEvent = null;
				}
				
				if(this._vertexRetargetEvent) {
					// Changing the place the arrow is pointing to
					let [edge, e, o, joint] = this._vertexRetargetEvent;
					this._vertexRetargetEvent = null;
					
					// If we didn't connect to anything, don't bother
					if(!("id" in o)) return;
					
					// And get the new target
					let newTarget = renderer.getNodeFromJoint(o.id);
					
					if(edge.dest != newTarget) {
						this._editor.addToUndoStack("edge_retarget", {id:edge.id, old:edge.dest, "new":newTarget});
						edge.dest = newTarget;
						this._interactor.rerender();
					}
				}
				
				if(this._vertexRehostEvent) {
					// Changing the place the arrow is coming from
					let [edge, e, o, joint] = this._vertexRehostEvent;
					this._vertexRehostEvent = null;
					
					// If we didn't connect to anything, don't bother
					if(!("id" in o)) return;
					
					// And get the new source
					let newHost = renderer.getNodeFromJoint(o.id);
					
					if(edge.origin != newHost) {
						this._editor.addToUndoStack("edge_rehost", {id:edge.id, old:edge.origin, "new":newHost});
						edge.origin = newHost;
						this._interactor.rerender();
					}
				}
			};
			
			$(node).on("mouseup", _out);
			$(node).mouseleave(_out);
		}
	};
}));
