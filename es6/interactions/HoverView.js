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
				this._interactor.loadDetails(node, renderer, true);
			});
			
			$(svgNode).on("mouseout", (e) => {
				this._interactor.hideDetailsPanel(renderer);
			});
			
			$(svgNode).on("click", (e) => {
				// We want the editor (if it is available) to handle this, because it has more sophisticated handling
				if(this._editor) return;
				this._interactor.loadDetails(node, renderer, true, true, true);
			});
		}
		
		async addCanvas(renderer, node) {
			node.addEventListener("click", (e) => {
				if(!$(e.target).hasClass("mm-background-grid")) return;
				this._interactor.hideDetailsPanel(renderer, true);
			});
		}
	};
}));
