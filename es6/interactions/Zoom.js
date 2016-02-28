"use strict";

load.provide("mm.interactions.Zoom", (function() {
	let Interaction = load.require("mm.interactions.Interaction");
	
	return class Zoom extends Interaction {
		async addCanvas(renderer, html) {
			let scale = 1.0;
			
			let _updateZoom = (mod, e) => {
				let elem = $(html).find(".mm-inner")[0];
				
				// mx, my are not scaled
				let [mx, my] = [0, 0];
				if(e) {
					[mx, my] = this._interactor.getMousePos(e, renderer).map((x) => x * scale);
					[mx, my] = [mx - elem.scrollLeft, my - elem.scrollTop];
				}
				
				let oldscale = scale;
				scale += mod;
				if(scale < 0.2) scale = 0.2;
				
				renderer.setScale(scale);
				this._interactor.rerender();
				
				console.log(mx, my);
				
				if(mod != 0) {
					let top = elem.scrollTop;
					let left = elem.scrollLeft;
					let otop = top;
					let oleft = left;
					
					left += mx;
					top += my;
					
					top /= oldscale;
					left /= oldscale;
					
					top *= scale;
					left *= scale;
					
					//top += otop - top;
					//left += oleft - left;
					
					left -= mx;
					top -= my;
					
					elem.scrollTop = top;
					elem.scrollLeft = left;
				}
			}
			
			// Widget zoom buttons
			$(html).find(".mm-zoom-in").click((e) => _updateZoom(0.3));
			$(html).find(".mm-zoom-out").click((e) => _updateZoom(-0.3));
			
			// Scroll zoom
			$(html).on('mousewheel DOMMouseScroll', function(e){
				// Browser compatability! :D
				if("detail" in e.originalEvent && e.originalEvent.detail) {
					if(e.originalEvent.detail > 0) {
						_updateZoom(-0.2, e);
					}else{
						_updateZoom(0.2, e);
					}
				}else{
					if(e.originalEvent.deltaY > 0) {
						_updateZoom(-0.2, e);
					}else{
						_updateZoom(0.2, e);
					}
				}
				
				e.preventDefault();
			});
		}
	};
}));
