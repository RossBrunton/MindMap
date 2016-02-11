"use strict";

load.provide("mm.interactions.HoverView", (function() {
	let Interaction = load.require("mm.interactions.Interaction");
	
	return class HoverView extends Interaction {
		async addNode(renderer, joint, node) {
			Interaction.prototype.addNode.call(this, renderer, joint, node);
			
			let svgNode = renderer.getSvgNode(node.id);
			
			// ----
			// Hangle mouse hover thing
			// ----
			// Would love to have defined panel here to avoid copy-paste, but the node probably isn't added yet
			$(svgNode).on("mousemove", (e) => {
				this._interactor.loadNodeDetails(node, renderer, true);
			});
			
			$(svgNode).on("mouseout", (e) => {
				this._interactor.hideDetailsPanel(renderer);
			});
			
			$(svgNode).on("click", (e) => {
				this._interactor.loadNodeDetails(node, renderer, true, true, true);
			});
		}
		
		async addCanvas(renderer, node) {
			node.addEventListener("click", (e) => {
				this._interactor.hideDetailsPanel(renderer, true);
			});
		}
	};
})());
