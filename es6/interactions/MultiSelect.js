"use strict";

load.provide("mm.interactions.MultiSelect", (function() {
	let Interaction = load.require("mm.interactions.Interaction");
	
	/** Handles selecting multiple nodes
	 * 
	 * The logic for moving node is done in `NodeMove`, and deletion is done in `Keyboard`, this only manages
	 *  selecting them.
	 * 
	 * @extends mm.Interaction
	 */
	return class MultiSelect extends Interaction {
		async addNode(renderer, joint, node) {
			Interaction.prototype.addNode.call(this, renderer, joint, node);
			
			let svgNode = renderer.getSvgNode(node.id);
			
			$(svgNode).on("click", (e) => {
				// If we click on a node and are holding the shift or control key...
				if(e.shiftKey || e.ctrlKey) {
					// Add or remove the node from the multiset thing
					if(this._state.inMultiSel(node)) {
						this._state.removeFromMultiSel(node);
					}else{
						this._state.addToMultiSel(node);
					}
					
					// And also hide the details panel, since you can't edit a node while selecting more than one
					this._interactor.hideDetailsPanel(renderer, true);
				}
			});
		}
		
		async addCanvas(renderer, node) {
			if(!this._editor) return;
			
			// If we just click without doing anything, unselect everything
			node.addEventListener("click", (e) => {
				if(!$(e.target).hasClass("mm-background-grid")) return;
				this._state.clearMultiSel();
			});
			
			// This is true when the right mouse is dragged
			let rmouse = false;
			
			// Now generate the rectangle to be displayed
			let svg = $(node).find("svg")[0];
			
			let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
			rect.setAttribute("width", "0");
			rect.setAttribute("height", "0");
			rect.setAttribute("fill", "#ffee22");
			rect.setAttribute("stroke", "#ffcc00");
			rect.setAttribute("class", "mm-multiselrect");
			svg.insertBefore(rect, $(svg).find(".mm-background-grid")[0]);
			
			// X and Y coordinates of the mouse when it was first clicked
			let [ox, oy] = [0, 0];
			
			$(node).on("mousemove", (e) => {
				let [mx, my] = this._interactor.getMousePos(e, renderer);
				let s = renderer.getScale();
				
				// If the mouse is down...
				if(rmouse) {
					// Generate a width and height
					let [w, h] = [mx - ox, my - oy];
					
					// And resize and move the rectangle to fit these dimensions and coordinates
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
			
			// Stop the regular right click menu
			$(node).on("contextmenu", (e) => {
				e.preventDefault();
			});
			
			$(node).on("mousedown", (e) => {
				// Ignore not right click
				if(e.button != 2) return;
				
				rmouse = true;
				
				// Get the mouse location
				[ox, oy] = this._interactor.getMousePos(e, renderer);
			});
			
			// To be called when the selection is to be stopped
			let _stopSelection = (e) => {
				// If we released a mouse and it isn't the right click, do nothing
				if(e.button != 2) return;
				
				// Calculate a rectangle from [x, y] with width [w, h]
				// w and h can't be negative, which is why we have all this logic
				let [mx, my] = this._interactor.getMousePos(e, renderer);
				let [w, h] = [mx - ox, my - oy];
				let x = w < 0 ? ox + w : ox;
				let y = h < 0 ? oy + h : oy;
				[w, h] = [w, h].map(Math.abs);
				
				// Now find all the nodes in that selection
				let nodeset = this._abstractGraph.objects.nodes.filter((n) => 
					n.x > x && n.y > y && n.x < x + w && n.y < y + h
				);
				
				// If we aren't holding shift or control, this will be a new set to replace the old
				if(!e.shiftKey && !e.ctrlKey) this._state.clearMultiSel();
				
				// Now add them
				nodeset.forEach(this._state.addToMultiSel.bind(this._state));
				
				// And cause interacter to update the borders
				this._interactor.updateMultiSel();
				
				rmouse = false;
				rect.setAttribute("width", 0);
			}
			
			$(node).on("mouseup", _stopSelection);
			$(node).mouseleave(_stopSelection);
		}
	};
}));
