"use strict";

load.provide("mm.interactions.Zoom", (function() {
	let Interaction = load.require("mm.interactions.Interaction");
	
	/** Interactor for changing the zoom level
	 * 
	 * @extends mm.Interaciton
	 */
	return class Zoom extends Interaction {
		async addCanvas(renderer, html) {
			// This is the current zoom scale
			let scale = 1.0;
			
			// This is the function to be called and actually changes the zoom
			// e is the mouse event, which is used to make the location look like its zooming on the mouse when using
			//  the scroll wheel
			let _updateZoom = (mod, e) => {
				// Get the actual element to be scaled
				let elem = $(html).find(".mm-inner")[0];
				
				// mouse location on the actual screen
				let [mx, my] = [0, 0];
				if(e) {
					[mx, my] = this._interactor.getMousePos(e, renderer).map((x) => x * scale);
					[mx, my] = [mx - elem.scrollLeft, my - elem.scrollTop];
				}
				
				// Perform the scale transformation
				let oldscale = scale;
				scale += mod;
				if(scale < 0.2) scale = 0.2;
				
				// Inform the renderer of the new scale
				renderer.setScale(scale);
				this._interactor.rerender();
				
				// Now scroll it so that it looks like we zoomed in
				if(mod != 0) {
					let top = elem.scrollTop;
					let left = elem.scrollLeft;
					
					// Translate by the mouse coordinate
					left += mx;
					top += my;
					
					// Undo the old zoom
					top /= oldscale;
					left /= oldscale;
					
					// Apply the new zoom
					top *= scale;
					left *= scale;
					
					// And untranslate the mouse
					left -= mx;
					top -= my;
					
					// And set the new scroll location
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
				
				// Stop it scrolling the actual page
				e.preventDefault();
			});
		}
	};
}));
