"use strict";

load.provide("mm.interactions.Pan", (function() {
	let Interaction = load.require("mm.interactions.Interaction");
	
	return class Pan extends Interaction {
		async addCanvas(renderer, html) {
			let mouseDown = false;
			let startX = 0;
			let startY = 0;
			
			html.addEventListener("mousedown", function(e) {
				if(e.button != 0) return;
				if(!$(e.target).hasClass("mm-background-grid")) return;
				mouseDown = true;
				startX = e.clientX;
				startY = e.clientY;
			});

			html.addEventListener("mousemove", function(e) {
				if(mouseDown) {
					$(html).find(".mm-inner")[0].scrollTop -= e.movementY;
					$(html).find(".mm-inner")[0].scrollLeft -= e.movementX;
				}
			});

			$(html).on("mouseup mouseout", function(e) {
				mouseDown = false;
			});
		}
	};
}));
