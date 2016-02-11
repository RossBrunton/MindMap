"use strict";

load.provide("mm.interactions.Interaction", (function() {
	let getDirName = load.require("mm.utils.getDirName");
	let getfile = load.require("mm.utils.getfile");
	let textGen = load.require("mm.textGen");
	
	return class Interaction {
		constructor(interactor, abstractGraph, editor) {
			this._interactor = interactor;
			this._abstractGraph = abstractGraph;
			this._editor = editor;
		}
		
		addNode(renderer, joint, node) {
			console.log("Added node");
		}
		
		addEdge(renderer, joint, edge) {
			console.log("Added edge");
		}
		
		async addCanvas(renderer, html) {
			console.log("Added Canvas");
		}
	};
})());
