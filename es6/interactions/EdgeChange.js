"use strict";

load.provide("mm.interactions.EdgeChange", (function() {
	let Interaction = load.require("mm.interactions.Interaction");
	let Editor = load.require("mm.Editor");
	
	Editor.registerUndo("edge_change", function(type, arg, graph) {
		graph.objects.getEdge(arg.id).points = arg.old;
	}, function(type, arg, graph) {
		graph.objects.getEdge(arg.id).points = arg["new"];
	});
	
	Editor.registerUndo("edge_retarget", function(type, arg, graph) {
		graph.objects.getEdge(arg.id).dest = arg.old;
	}, function(type, arg, graph) {
		graph.objects.getEdge(arg.id).dest = arg["new"];
	});
	
	Editor.registerUndo("edge_rehost", function(type, arg, graph) {
		graph.objects.getEdge(arg.id).origin = arg.old;
	}, function(type, arg, graph) {
		graph.objects.getEdge(arg.id).origin = arg["new"];
	});
	
	return class EdgeChange extends Interaction {
		constructor(interactor, abstractGraph, editor) {
			super(interactor, abstractGraph, editor);
			
			this._vertexChangeEvent = null;
			this._vertexRetargetEvent = null;
			this._vertexRehostEvent = null;
			this._mouseDown = false;
			this._validMkpoint = false;
		}
		
		async addEdge(renderer, joint, edge) {
			Interaction.prototype.addEdge.call(this, renderer, joint, edge);
			
			// We want to skip the first "change:vertices" event, since we want to make sure the user actually creates
			// it by dragging
			let skipped = false;
			
			let svgEdge = renderer.getSvgEdge(edge.id);
			
			$(svgEdge).on("mousedown", (e) => {
				this._mouseDown = true;
				this._validMkpoint = edge.points.length > 0;
				skipped = false;
				
				joint.set("connector", {name:"smooth"});
				
				if(!$(e.target).hasClass("marker-vertex")
				&& !$(e.target).hasClass("marker-arrowhead")
				&& !$(e.target).hasClass("marker-vertex-remove-area")
				&& !$(e.target).hasClass("marker-vertex-remove")
				&& edge.points.length >= 1
				) {
					e.stopPropagation();
				}
				
				if($(e.target).parents(".labels").length
					
				) {
					e.stopPropagation();
				}
			});
			
			joint.on("change:vertices", (e, o) => {
				if(!this._mouseDown) return;
				this._validMkpoint = this._validMkpoint | skipped;
				skipped = true;
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
			let _out = (e) => {
				// This doesn't handle mouse going out of widget
				this._mouseDown = false;
				
				if(this._vertexChangeEvent) {
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
					let [edge, e, o, joint] = this._vertexRetargetEvent;
					this._vertexRetargetEvent = null;
					
					if(!("id" in o)) return;
					
					let newTarget = renderer.getNodeFromJoint(o.id);
					
					if(edge.dest != newTarget) {
						this._editor.addToUndoStack("edge_retarget", {id:edge.id, old:edge.dest, "new":newTarget});
						edge.dest = newTarget;
						this._interactor.rerender();
					}
				}
				
				if(this._vertexRehostEvent) {
					let [edge, e, o, joint] = this._vertexRehostEvent;
					this._vertexRehostEvent = null;
					
					if(!("id" in o)) return;
					
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
