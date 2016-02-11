"use strict";

load.provide("mm.interactions.Zoom", (function() {
	let Interaction = load.require("mm.interactions.Interaction");
	
	return class Zoom extends Interaction {
		async addCanvas(renderer, html) {
			let scale = 1.0;
			
			let _updateZoom = (mod) => {
				let oldscale = scale;
				scale += mod;
				if(scale < 0.2) scale = 0.2;
				
				//renderer.scale(scale);
				
				for(let x of this.myNodes(renderer)) {
					
					x[1].position(x[2].x * scale, x[2].y * scale);
					
					/*$(x[3]).find("text").css("font-size", `${(1/scale) * 100}%`);
					x[1].attr("rect/height", (x[1].attr("rect/height")/(1/oldscale)) * (1/scale));
					x[1].attr("rect/width", (x[1].attr("rect/width")/(1/oldscale)) * (1/scale));*/
				};
				//$(html).find(".mm-paper").css("font-size", `${(1/scale) * 100}%`);
				
				for(let x of this.myEdges(renderer)) {
					
					x[1].set("vertices", x[2].points.map(([x, y]) => ({x:x * scale, y:y * scale})));
					
					/*$(x[3]).find("text").css("font-size", `${(1/scale) * 100}%`);
					x[1].attr("rect/height", (x[1].attr("rect/height")/(1/oldscale)) * (1/scale));
					x[1].attr("rect/width", (x[1].attr("rect/width")/(1/oldscale)) * (1/scale));*/
				};
			}
			
			// Widget zoom buttons
			$(html).find(".mm-zoom-in").click((e) => _updateZoom(0.3));
			$(html).find(".mm-zoom-out").click((e) => _updateZoom(-0.3));
			
			// Scroll zoom
			$(html).on('mousewheel DOMMouseScroll', function(e){
				// Browser compatability! :D
				if("detail" in e.originalEvent && e.originalEvent.detail) {
					if(e.originalEvent.detail > 0) {
						_updateZoom(-0.1);
					}else{
						_updateZoom(0.1);
					}
				}else{
					if(e.originalEvent.deltaY > 0) {
						_updateZoom(-0.1);
					}else{
						_updateZoom(0.1);
					}
				}
				
				e.preventDefault();
			});
		}
	};
})());
