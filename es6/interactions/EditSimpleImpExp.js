"use strict";

load.provide("mm.interactions.EditSimpleImpExp", (function() {
	let Interaction = load.require("mm.interactions.Interaction");
	
	/** A really simple import/export system
	 * 
	 * Attaches listeners to the "import" and "export" buttons, and uses a file input (import) or a file save (export)
	 *  diolog to export the file.
	 * 
	 * @extends mm.Interaciton
	 */
	return class EditSimpleImpExp extends Interaction {
		async addCanvas(renderer, node) {
			$(node).find(".mm-export-button").click((e) => {
				// Export
				
				// First of all, get the diagram as a JSON string
				let txt = JSON.stringify(this._abstractGraph.objects.toJson());
				
				// Now generate a data url for it
				let url = "";
				if("download" in $("a")[0]) {
					// Fancy new modern browser
					url = `data:application/json;charset=utf-8,${encodeURIComponent(txt)}`;
				}else{
					// Crappy old browser, serve as binary data so the browser doesn't try to display it
					url = `data:application/octet-stream;charset=utf-8,${encodeURIComponent(txt)}`;
				}
				
				// Create a hyperlink
				var a = document.createElement("a");
				a.setAttribute("href", url);
				a.setAttribute("download", "mindmap.json");
				a.style.display = "none";
				
				// And then click this link
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);
			});
			
			$(node).find(".mm-import-button").click((e) => {
				// File input
				
				// Create the input element
				var input = document.createElement("input");
				input.setAttribute("type", "file");
				input.style.display = "none";
				
				// Add a handler for the file being uploaded
				$(input).change((e) => {
					let fr = new FileReader();
					
					fr.onload = (le) => {
						// Handle the file, we use a try here in case it is invalid
						try {
							let obj = JSON.parse(fr.result);
							
							// Some checking of the file
							let err = this._abstractGraph.objects.check(obj);
							
							if(err) {
								alert(`Sorry, could not import the file. The error message given was:\n\n${err}`);
							}else{
								// Everything is OK, lets load it
								this._abstractGraph.objects.reload(obj);
								this._interactor.rerender();
								this._editor.clearUndoStack();
							}
						} catch(e) {
							alert("Sorry, that does not look like a valid file.");
						}
					}
					
					// Read the selected file as text into the filereader (duh)
					fr.readAsText(input.files[0]);
				});
				
				// And then click it!
				document.body.appendChild(input);
				input.click();
				document.body.removeChild(input);
			});
		}
	};
}));
