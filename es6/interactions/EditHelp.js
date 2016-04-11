"use strict";

load.provide("mm.interactions.EditHelp", (function() {
	let Interaction = load.require("mm.interactions.Interaction");
	
	/** Interactor for showing and hiding the help screen
	 * 
	 * @extends mm.Interaction
	 */
	return class EditHelp extends Interaction {
		async addCanvas(renderer, node) {
			// Show it when the button is clicked
			$(node).find(".mm-help-button").click((e) => $(node).find(".mm-edit-help").removeClass("hidden"));
			
			// And hide it when the panel is clicked
			$(node).find(".mm-edit-help").click((e) => $(node).find(".mm-edit-help").addClass("hidden"));
		}
	};
}));
