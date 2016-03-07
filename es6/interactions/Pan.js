"use strict";

load.provide("mm.interactions.Pan", (function() {
	let Interaction = load.require("mm.interactions.Interaction");
	
	return class Pan extends Interaction {
		async addCanvas(renderer, html) {
			let mouseDown = false;
			let cx = 0;
			let cy = 0;
			
			html.addEventListener("mousedown", function(e) {
				if(e.button != 0) return;
				if(!$(e.target).hasClass("mm-background-grid")) return;
				mouseDown = true;
				cx = e.clientX;
				cy = e.clientY;
			});

			html.addEventListener("mousemove", function(e) {
				let [deltaX, deltaY] = [e.clientX -cx, e.clientY - cy];
				[cx, cy] = [e.clientX, e.clientY];
				
				if(mouseDown) {
					$(html).find(".mm-inner")[0].scrollTop -= deltaY;
					$(html).find(".mm-inner")[0].scrollLeft -= deltaX;
				}
			});

			$(html).on("mouseup mouseout", function(e) {
				mouseDown = false;
			});
		}
	};
}));
