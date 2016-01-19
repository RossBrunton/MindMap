"use strict";

load.provide("mm.Interactor", (function() {
	return class Interactor {
		constructor(abstractGraph, renderers) {
			this._abstractGraph = abstractGraph;
			this._renderers = renderers;
			
			this._abstractGraph.setInteractor(this);
			renderers.forEach((r) => r.setInteractor(this));
		}
		
		addNode(node) {
			console.log(`Node added: ${node}`);
		}
		
		addEdge(edge) {
			console.log(`Edge added: ${edge}`);
		}
		
		rerender() {
			this._renderers.forEach((r) => r.rerender(this._abstractGraph.objects));
		}
	};
})());
