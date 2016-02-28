"use strict";

load.provide("mm.interactions.EditHelp", (function() {
	let Interaction = load.require("mm.interactions.Interaction");
	
	return class EditHelp extends Interaction {
		async addCanvas(renderer, node) {
			$(node).find(".mm-help-button").click((e) => $(node).find(".mm-edit-help").removeClass("hidden"));
			$(node).find(".mm-edit-help").click((e) => $(node).find(".mm-edit-help").addClass("hidden"));
		}
	};
}));
