"use strict";

load.provide("mm.interactions.MultiSelect", (function() {
	let Interaction = load.require("mm.interactions.Interaction");
	
	return class MultiSelect extends Interaction {
		async addNode(renderer, joint, node) {
			Interaction.prototype.addNode.call(this, renderer, joint, node);
			
			let svgNode = renderer.getSvgNode(node.id);
			
			$(svgNode).on("click", (e) => {
				if(e.shiftKey) {
					if(this._state.inMultiSel(node)) {
						this._state.removeFromMultiSel(node);
					}else{
						this._state.addToMultiSel(node);
					}
					
					this._interactor.hideDetailsPanel(renderer, true);
				}
			});
		}
		
		async addCanvas(renderer, node) {
			if(!this._editor) return;
			
			node.addEventListener("click", (e) => {
				if(e.target.classList[0] != "mm-background-grid") return;
				this._state.clearMultiSel();
			});
			
			let rmouse = false;
			
			let svg = $(node).find("svg")[0];
			
			let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
			rect.setAttribute("width", "0");
			rect.setAttribute("height", "0");
			rect.setAttribute("fill", "#ffee22");
			rect.setAttribute("stroke", "#ffcc00");
			rect.setAttribute("class", "mm-multiselrect");
			svg.insertBefore(rect, $(svg).find(".mm-background-grid")[0]);
			
			let [ox, oy] = [0, 0];
			
			$(node).on("mousemove", (e) => {
				let [mx, my] = this._interactor.getMousePos(e, renderer);
				
				if(rmouse) {
					let [w, h] = [mx - ox, my - oy];
					
					if(w < 0) {
						rect.setAttribute("width", -w);
						rect.setAttribute("x", ox + w);
					}else{
						rect.setAttribute("width", w);
						rect.setAttribute("x", ox);
					}
					
					if(h < 0) {
						rect.setAttribute("height", -h);
						rect.setAttribute("y", oy + h);
					}else{
						rect.setAttribute("height", h);
						rect.setAttribute("y", oy);
					}
				}
			});
			
			$(node).on("contextmenu", (e) => {
				e.preventDefault();
			});
			
			$(node).on("mousedown", (e) => {
				if(e.button != 2) return;
				
				rmouse = true;
				
				let [mx, my] = this._interactor.getMousePos(e, renderer);
				ox = mx;
				oy = my;
			});
			
			$(node).on("mouseup", (e) => {
				if(e.button != 2) return;
				
				rmouse = false;
				rect.setAttribute("width", 0);
			});
		}
	};
})());
