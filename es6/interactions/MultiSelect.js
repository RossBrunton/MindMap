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
				if(!$(e.target).hasClass("mm-background-grid")) return;
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
				let s = renderer.getScale();
				
				if(rmouse) {
					let [w, h] = [mx - ox, my - oy];
					
					if(w < 0) {
						rect.setAttribute("width", -w*s);
						rect.setAttribute("x", (ox + w)*s);
					}else{
						rect.setAttribute("width", w*s);
						rect.setAttribute("x", ox*s);
					}
					
					if(h < 0) {
						rect.setAttribute("height", -h*s);
						rect.setAttribute("y", (oy + h)*s);
					}else{
						rect.setAttribute("height", h*s);
						rect.setAttribute("y", oy*s);
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
				
				let [mx, my] = this._interactor.getMousePos(e, renderer);
				let [w, h] = [mx - ox, my - oy];
				let x = w < 0 ? ox + w : ox;
				let y = h < 0 ? oy + h : oy;
				[w, h] = [w, h].map(Math.abs);
				
				// Now find all the nodes in that selection
				let nodeset = this._abstractGraph.objects.nodes.filter((n) => 
					n.x > x && n.y > y && n.x < x + w && n.y < y + h
				);
				
				if(!e.shiftKey) this._state.clearMultiSel();
				nodeset.forEach(this._state.addToMultiSel.bind(this._state));
				this._interactor.updateMultiSel();
				
				rmouse = false;
				rect.setAttribute("width", 0);
			});
		}
	};
}));
