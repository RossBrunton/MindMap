"use strict";

load.provide("mm.interactions.EdgeChange", (function() {
	let Interaction = load.require("mm.interactions.Interaction");
	
	return class EdgeChange extends Interaction {
		constructor(interactor, abstractGraph, editor) {
			super(interactor, abstractGraph, editor);
			
			this._vertexChangeEvent = null;
		}
		
		async addEdge(renderer, joint, edge) {
			Interaction.prototype.addEdge.call(this, renderer, joint, edge);
			
			joint.on("change:vertices", (e, o) => {
				this._vertexChangeEvent = [edge, e];
			});
		}
		
		async addCanvas(renderer, node) {
			$(node).on("mouseup", (e) => {
				// This doesn't handle mouse going out of widget
				if(this._vertexChangeEvent) {
					let [edge, e] = this._vertexChangeEvent;
					let oldVerts = edge.points;
					
					edge.changePoints(e.attributes.vertices.map(x => [x.x, x.y]));
					
					if(this._editor) this._editor.addToUndoStack("edge_change", {id:edge.id, old:oldVerts, "new":edge.points});
					
					this._vertexChangeEvent = null;
				}
			});
		}
	};
})());
