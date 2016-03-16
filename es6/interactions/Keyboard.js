"use strict";

load.provide("mm.interactions.Keyboard", (function() {
	let Interaction = load.require("mm.interactions.Interaction");
	
	return class Keyboard extends Interaction {
		async addCanvas(renderer, html) {
			$(html).attr("tabindex", 0);
			
			$(html).on("mousedown", (x) => {
				if(!$.contains(html, document.activeElement)) $(html).focus()}
			); // I have no idea why this doesn't happen automatically
			
			if(this._editor) $(html).on("keydown", (e) => {
				if(e.target.tagName.toUpperCase() == "INPUT") return;
				
				let key = e.keyCode;
				
				if(key == 46) { // Delete
					if(this._state.countMultiSel()) {
						let rec = this._abstractGraph.cascadingRemoveNode(this._state.getMultiSel());
						this._editor.addToUndoStack("node_multidelete", {recover:rec});
						this._state.clearMultiSel();
						this._interactor.rerender();
					}
				}
				
				if(key == 27) { // Escape
					$(html).focus();
					if(this._interactor.hideDetailsPanel(renderer, true)) return;
					this._state.clearMultiSel();
					
				}
				
				if(e.ctrlKey) {
					if(key == 65) { // CTRL + A
						for(let n of this.myNodes(renderer)) {
							this._state.addToMultiSel(n[2]);
						}
						
						e.preventDefault();
					}
					
					if(key == 90) { // CTRL + Z
						this._editor.undo();
						
						e.preventDefault();
					}
					
					if([82, 89].includes(key)) { // CTRL + [R, Y]
						this._editor.redo();
						
						e.preventDefault();
					}
				}
			});
		}
	};
}));
