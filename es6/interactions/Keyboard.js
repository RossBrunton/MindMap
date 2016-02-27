"use strict";

load.provide("mm.interactions.Keyboard", (function() {
	let Interaction = load.require("mm.interactions.Interaction");
	
	return class Keyboard extends Interaction {
		async addCanvas(renderer, html) {
			$(html).attr("tabindex", 0);
			
			$(html).on("click", (x) => $(html).focus()); // I have no idea why this doesn't happen automatically
			
			if(this._editor) $(html).on("keydown", (e) => {
				console.log(e.keyCode);
				
				let key = e.keyCode;
				
				if(key == 46) { // Delete
					if(this._state.countMultiSel()) {
						let rec = this._abstractGraph.cascadingRemoveNode(this._state.getMultiSel());
						this._editor.addToUndoStack("node_multidelete", {recover:rec});
						this._state.clearMultiSel();
						this._interactor.rerender();
					}
				}
			});
		}
	};
})());
