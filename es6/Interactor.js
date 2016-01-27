"use strict";

load.provide("mm.Interactor", (function() {
	let getDirName = load.require("mm.utils.getDirName");
	let getfile = load.require("mm.utils.getfile");
	let strf = load.require("mm.utils.strf");
	
	let _dir = getDirName("Interactor.js") + "interactorResources/";
	
	// First of all, load the CSS file
	let cssNode = document.createElement("link");
	cssNode.rel = "stylesheet";
	cssNode.type = "text/css";
	cssNode.href = _dir + "styles.css";
	$("head").append(cssNode);
	
	return class Interactor {
		constructor(abstractGraph, renderers) {
			this._abstractGraph = abstractGraph;
			this._renderers = renderers;
			
			this._abstractGraph.setInteractor(this);
			renderers.forEach((r) => r.setInteractor(this));
		}
		
		addNode(renderer, object, node) {
			console.log("Node added: %o for %o", object, node);
			
			let svgNode = $(`[model-id="${object.id}"]`)[0];
			
			// ----
			// Hangle mouse hover thing
			// ----
			// Would love to have defined panel here to avoid copy-paste, but the node probably isn't added yet
			$(svgNode).on("mousemove", (e) => {
				let panel = $(svgNode).parents(".mm-root").find(".mm-details-panel");
				if(panel.hasClass("long")) return;
				
				panel.find(".mm-details-short").html(strf(node.type.viewText, node));
				panel.find(".mm-details-long").html(strf(node.type.viewAddText, node));
				panel.removeClass("hidden");
			});
			
			$(svgNode).on("mouseout", (e) => {
				let panel = $(svgNode).parents(".mm-root").find(".mm-details-panel");
				panel.addClass("hidden");
			});
			
			$(svgNode).on("click", (e) => {
				let panel = $(svgNode).parents(".mm-root").find(".mm-details-panel");
				panel.addClass("long");
				e.preventDefault();
				e.stopPropagation();
			});
		}
		
		addEdge(renderer, object, edge) {
			console.log(`Edge added: ${edge}`);
		}
		
		async addCanvas(renderer, node) {
			console.log(`Canvas added: ${node}`);
			
			// Vars in this closure
			let scale = 1.0;
			let mouseDown = false;
			let startX = 0;
			let startY = 0;
			
			// Put the widget thing with the zoom things
			let widgetHtml = await getfile(_dir + "viewWidget.html");
			$(node).prepend(widgetHtml);
			
			// And the details panel
			let detailsHtml = await getfile(_dir + "detailsPanel.html");
			$(node).prepend(detailsHtml);
			
			
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
			
			
			// ----
			// Pan
			// ----
			node.addEventListener("mousedown", function(e) {
				mouseDown = true;
				startX = e.clientX;
				startY = e.clientY;
			});

			node.addEventListener("mousemove", function(e) {
				if(mouseDown) {
					$(node).find(".mm-inner")[0].scrollTop -= e.movementY;
					$(node).find(".mm-inner")[0].scrollLeft -= e.movementX;
				}
			});

			$(node).on("mouseup mouseout", function(e) {
				mouseDown = false;
			});
			
			
			// ----
			// Clear details panel
			// ----
			node.addEventListener("mousedown", (e) => {
				let panel = $(node).find(".mm-details-panel");
				panel.removeClass("long");
			});
		}
		
		rerender() {
			this._renderers.forEach((r) => r.rerender(this._abstractGraph.objects));
		}
	};
})());
