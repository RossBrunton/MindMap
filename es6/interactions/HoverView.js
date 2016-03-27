"use strict";

load.provide("mm.interactions.HoverView", (function() {
	let Interaction = load.require("mm.interactions.Interaction");
	
	/** Handles hovering over a node, and clicking it when not editing
	 * 
	 * @extends mm.Interaciton
	 */
	return class HoverView extends Interaction {
		async addNode(renderer, joint, node) {
			Interaction.prototype.addNode.call(this, renderer, joint, node);
			
			// The SVG element for this node
			let svgNode = renderer.getSvgNode(node.id);
			
			$(svgNode).on("mousemove", (e) => {
				// Hovering shows a short summary
				this._interactor.loadDetails(node, renderer, true);
			});
			
			$(svgNode).on("mouseout", (e) => {
				// Which is then removed when hovered out
				this._interactor.hideDetailsPanel(renderer);
			});
			
			$(svgNode).on("click", (e) => {
				// And clicking shows a full panel
				
				// We want the editor (if it is available) to handle this, because it has more sophisticated handling
				if(this._editor) return;
				this._interactor.loadDetails(node, renderer, true, true, true);
			});
		}
		
		async addCanvas(renderer, node) {
			node.addEventListener("click", (e) => {
				// Clicking outside hides the panel as well
				if(!$(e.target).hasClass("mm-background-grid")) return;
				
				// Again, editor has special handling
				if(this._editor) return;
				
				this._interactor.hideDetailsPanel(renderer, true);
			});
		}
	};
}));
