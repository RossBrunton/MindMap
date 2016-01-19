"use strict";

load.provide("mm.Interactor", (function() {
	return class Interactor {
		constructor(abstractGraph, renderers) {
			this._abstractGraph = abstractGraph;
			this._renderers = renderers;
			
			this._abstractGraph.setInteractor(this);
			renderers.forEach((r) => r.setInteractor(this));
		}
		
		addNode(renderer, node) {
			console.log(`Node added: ${node}`);
		}
		
		addEdge(renderer, edge) {
			console.log(`Edge added: ${edge}`);
		}
		
		addCanvas(renderer, node) {
			console.log(`Canvas added: ${node}`);
			
			// Vars in this closure
			let scale = 1.0;
			
			// Scroll zoom
			$(node).on('mousewheel DOMMouseScroll', function(e){
				console.log(e);
				
				// Browser compatability! :D
				if("detail" in e.originalEvent && e.originalEvent.detail) {
					if(e.originalEvent.detail > 0) {
						scale -= 0.1;
					}else{
						scale += 0.1;
					}
				}else{
					if(e.originalEvent.deltaY > 0) {
						scale -= 0.1;
					}else{
						scale += 0.1;
					}
				}
				
				// Range check
				if(scale < 0.2) scale = 0.2;
				
				renderer.scale(scale);
				
				e.preventDefault();
			});
		}
		
		rerender() {
			this._renderers.forEach((r) => r.rerender(this._abstractGraph.objects));
		}
	};
})());
