"use strict";

load.provide("mm.Interactor", (function() {
	let getDirName = load.require("mm.utils.getDirName");
	let getfile = load.require("mm.utils.getfile");
	
	let dir = getDirName("Interactor.js") + "interactorResources/";
	
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
		
		async addCanvas(renderer, node) {
			console.log(`Canvas added: ${node}`);
			
			// Vars in this closure
			let scale = 1.0;
			
			// Put the widget thing with the zoom things
			let widgetHtml = await getfile(dir + "viewWidget.html");
			$(node).prepend(widgetHtml);
			
			
			// ----
			// Zoom
			// ----
			let _updateZoom = function(mod) {
				scale += mod;
				if(scale < 0.2) scale = 0.2;
				
				renderer.scale(scale);
			}
			
			// Widget zoom buttons
			$(node).find(".mm-zoom-in").click((e) => _updateZoom(0.3));
			$(node).find(".mm-zoom-out").click((e) => _updateZoom(-0.3));
			
			// Scroll zoom
			$(node).on('mousewheel DOMMouseScroll', function(e){
				console.log(e);
				
				// Browser compatability! :D
				if("detail" in e.originalEvent && e.originalEvent.detail) {
					if(e.originalEvent.detail > 0) {
						_updateZoom(-0.1);
					}else{
						_updateZoom(0.1);
					}
				}else{
					if(e.originalEvent.deltaY > 0) {
						_updateZoom(-0.1);
					}else{
						_updateZoom(0.1);
					}
				}
				
				e.preventDefault();
			});
		}
		
		rerender() {
			this._renderers.forEach((r) => r.rerender(this._abstractGraph.objects));
		}
	};
})());
