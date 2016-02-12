"use strict";

load.provide("mm.interactions.Interaction", (function() {
	return class Interaction {
		constructor(interactor, abstractGraph, editor) {
			this._interactor = interactor;
			this._abstractGraph = abstractGraph;
			this._editor = editor;
			
			this._nodes = new Map();
			this._edges = [];
		}
		
		async addNode(renderer, joint, node) {
			this._nodes.set(node.id, [renderer, joint, node]);
		}
		
		async addEdge(renderer, joint, edge) {
			this._edges.push([renderer, joint, edge]);
		}
		
		async addCanvas(renderer, html) {
			// Pass
		}
		
		*myEdges(renderer) {
			for(let e of this._edges) {
				if(e[0] == renderer) yield e;
			}
		}
		
		*myNodes(renderer) {
			for(let e of this._nodes) {
				if(e[0] == renderer) yield e;
			}
		}
	};
})());
