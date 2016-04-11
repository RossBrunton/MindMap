"use strict";

load.provide("mm.interactions.Pan", (function() {
	let Interaction = load.require("mm.interactions.Interaction");
	
	/** Handles click draging around the diagram
	 * 
	 * Basically, listens for mouse movements and updates the scroll location of the diagram.
	 * 
	 * @extends mm.Interaction
	 */
	return class Pan extends Interaction {
		async addCanvas(renderer, html) {
			let mouseDown = false;
			
			// Current mouse location, used to check how much the mouse has moved since the last mousemove event
			let cx = 0;
			let cy = 0;
			
			html.addEventListener("mousedown", (e) => {
				// Don't bother dragging if we aren't using the left click
				if(e.button != 0) return;
				
				// ... Or if we have clicked something else and aren't in the editor
				if(!$(e.target).hasClass("mm-background-grid") && this._editor) return;
				
				mouseDown = true;
				cx = e.clientX;
				cy = e.clientY;
			});

			html.addEventListener("mousemove", (e) => {
				let [deltaX, deltaY] = [e.clientX -cx, e.clientY - cy];
				[cx, cy] = [e.clientX, e.clientY];
				
				if(mouseDown) {
					$(html).find(".mm-inner")[0].scrollTop -= deltaY;
					$(html).find(".mm-inner")[0].scrollLeft -= deltaX;
				}
			});

			$(html).on("mouseup", (e) => void (mouseDown = false));
			$(html).mouseleave((e) => void (mouseDown = false));
		}
	};
}));
