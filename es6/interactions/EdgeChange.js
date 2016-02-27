"use strict";

load.provide("mm.interactions.EdgeChange", (function() {
	let Interaction = load.require("mm.interactions.Interaction");
	
	return class EdgeChange extends Interaction {
		constructor(interactor, abstractGraph, editor) {
			super(interactor, abstractGraph, editor);
			
			this._vertexChangeEvent = null;
			this._vertexRetargetEvent = null;
			this._vertexRehostEvent = null;
			this._mouseDown = false;
		}
		
		async addEdge(renderer, joint, edge) {
			Interaction.prototype.addEdge.call(this, renderer, joint, edge);
			
			let svgEdge = renderer.getSvgEdge(edge.id);
			let mdown = false;
			
			$(svgEdge).on("mousedown", (e) => {
				this._mouseDown = true;
				
				if(!Array.prototype.includes.call(e.target.classList, "marker-vertex")
				&& !Array.prototype.includes.call(e.target.classList, "marker-arrowhead")
				&& !Array.prototype.includes.call(e.target.classList, "marker-vertex-remove-area")
				&& !Array.prototype.includes.call(e.target.classList, "marker-vertex-remove")
				&& edge.points.length >= 1
				) {
					e.stopPropagation();
				}
			});
			
			joint.on("change:vertices", (e, o) => {
				if(!this._mouseDown) return;
				this._vertexChangeEvent = [edge, e];
				
			});
			
			joint.on("change:source", (e, o) => {
				this._vertexRehostEvent = [edge, e, o, joint];
			});
			
			joint.on("change:target", (e, o) => {
				this._vertexRetargetEvent = [edge, e, o, joint];
			});
		}
		
		async addCanvas(renderer, node) {
			$(node).on("mouseup", (e) => {
				// This doesn't handle mouse going out of widget
				this._mouseDown = false;
				
				if(this._vertexChangeEvent) {
					let [edge, e] = this._vertexChangeEvent;
					let oldVerts = edge.points;
					
					edge.changePoints(e.attributes.vertices.map(x => [x.x / renderer.getScale(), x.y / renderer.getScale()]));
					
					if(this._editor) this._editor.addToUndoStack("edge_change", {id:edge.id, old:oldVerts, "new":edge.points});
					this._vertexChangeEvent = null;
					this._interactor.rerender();
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
			});
		}
	};
})());
