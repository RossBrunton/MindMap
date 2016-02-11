"use strict";

load.provide("mm.interactions.Interaction", (function() {
	return class Interaction {
		constructor(interactor, abstractGraph, editor) {
			this._interactor = interactor;
			this._abstractGraph = abstractGraph;
			this._editor = editor;
		}
		
		async addNode(renderer, joint, node) {
			console.log("Added node");
		}
		
		async addEdge(renderer, joint, edge) {
			console.log("Added edge");
		}
		
		async addCanvas(renderer, html) {
			console.log("Added Canvas");
		}
	};
})());
