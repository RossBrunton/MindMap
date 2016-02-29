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
			
			$(node).find(".mm-import-button").click((e) => {
				var input = document.createElement("input");
				input.setAttribute("type", "file");
				input.style.display = "none";
				
				$(input).change((e) => {
					let fr = new FileReader();
					
					fr.onload = (le) => {
						try {
							let obj = JSON.parse(fr.result);
							
							let err = this._abstractGraph.objects.check(obj);
							
							if(err) {
								alert(`Sorry, could not import the file. The error message given was:\n\n${err}`);
							}else{
								this._abstractGraph.objects.reload(obj);
								this._interactor.rerender();
								this._editor.clearUndoStack();
							}
						} catch(e) {
							alert("Sorry, that does not look like a valid file.");
						}
					}
					
					fr.readAsText(input.files[0]);
				});
				
				document.body.appendChild(input);
				input.click();
				document.body.removeChild(input);
			});
		}
	};
}));
