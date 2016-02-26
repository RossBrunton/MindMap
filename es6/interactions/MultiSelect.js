"use strict";

load.provide("mm.interactions.MultiSelect", (function() {
	let Interaction = load.require("mm.interactions.Interaction");
	
	return class MultiSelect extends Interaction {
		async addNode(renderer, joint, node) {
			Interaction.prototype.addNode.call(this, renderer, joint, node);
			
			let svgNode = renderer.getSvgNode(node.id);
			
			$(svgNode).on("click", (e) => {
				if(e.shiftKey) {
					if(this._interactor.inMultiSel(node)) {
						this._interactor.removeFromMultiSel(node);
					}else{
						this._interactor.addToMultiSel(node);
					}
				}
			});
		}
		
		async addCanvas(renderer, node) {
			node.addEventListener("click", (e) => {
				if(e.target.classList[0] != "mm-background-grid") return;
				this._interactor.clearMultiSel();
			});
		}
	};
})());
