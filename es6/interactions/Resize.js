"use strict";

load.provide("mm.interactions.Resize", (function() {
	let Interaction = load.require("mm.interactions.Interaction");
	
	return class Resize extends Interaction {
		async addCanvas(renderer, html) {
			let top = -1;
			let left = -1;
			let inner = $(html).find(".mm-inner")[0];
			let svg = $(html).find("svg");
			
			if(this._editor) html.addEventListener("mousemove", function(e) {
				if(top == inner.scrollTop && left == inner.scrollLeft) return;
				
				top = inner.scrollTop;
				left = inner.scrollLeft;
				
				// Update locations of blocks
				
				if(top == 0) {
					$(html).find(".mm-resize-top").show();
				}else{
					$(html).find(".mm-resize-top").hide();
				}
				
				if(left == 0) {
					$(html).find(".mm-resize-left").show();
				}else{
					$(html).find(".mm-resize-left").hide();
				}
				
				if(top >= svg.height() - html.scrollHeight) {
					$(html).find(".mm-resize-bottom").show();
				}else{
					$(html).find(".mm-resize-bottom").hide();
				}
				
				if(left >= svg.width() - html.scrollWidth) {
					$(html).find(".mm-resize-right").show();
				}else{
					$(html).find(".mm-resize-right").hide();
				}
			});
		}
	};
})());
