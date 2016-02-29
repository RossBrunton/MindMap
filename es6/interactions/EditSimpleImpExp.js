"use strict";

load.provide("mm.interactions.EditSimpleImpExp", (function() {
	let Interaction = load.require("mm.interactions.Interaction");
	
	return class EditSimpleImpExp extends Interaction {
		async addCanvas(renderer, node) {
			$(node).find(".mm-export-button").click((e) => {
				let txt = JSON.stringify(this._abstractGraph.objects.toJson());
				let url = "";
				
				if("download" in $("a")[0]) {
					// Fancy new modern browser
					url = `data:application/json;charset=utf-8,${encodeURIComponent(txt)}`;
				}else{
					// Crappy old browser
					url = `data:application/octet-stream;charset=utf-8,${encodeURIComponent(txt)}`;
				}
				
				var a = document.createElement("a");
				a.setAttribute("href", url);
				a.setAttribute("download", "mindmap.json");
				a.style.display = "none";
				
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);
			});
		}
	};
}));
