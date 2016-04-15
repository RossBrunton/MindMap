"use strict";

load.provide("mm.HTMLGraphFinder", (function() {
	let Renderer = load.require("mm.Renderer");
	
	/** This is a simple generator that creates and yields ``graph areas"
	 * 
	 * It yields a number of objects by searching the document for graph-display elements. Each object has the following
	 *  properties:
	 * - renderer: A renderer controlling this area.
	 * - objectsUrl: The url of the objects file, or undefined if it is unspecified.
	 * - typesUrl: The url of the types file.
	 * - editor: A boolean, whether the editor is enabled or not.
	 */
	return function*() {
		for(let n of Array.from(document.querySelectorAll("graph-display"))) {
			let editor = false;
			if(n.getAttribute("editor") && ["true", "1", "editor"].includes(n.getAttribute("editor").toLowerCase())) {
				editor = true;
			}
			
			yield {
				renderer: new Renderer(n, editor),
				objectsUrl: n.getAttribute("src"),
				typesUrl: n.getAttribute("types"),
				editor: editor
			};
		}
	}
}));


load.provide("mm.graphManager", (function() {
	let AbstractGraph = load.require("mm.structs.AbstractGraph");
	let finder = load.require("mm.HTMLGraphFinder");
	let Interactor = load.require("mm.Interactor");
	let Editor = load.require("mm.Editor");
    
	/** Controls all the AbstractNodeMaps available, and creates them and their renderers.
	 */
	let graphManager = {};
	
	/** Array of all the interactors and graphs known about
	 * 
	 * @type {array} An array of [interactor, graph] pairs.
	 */
	let _graphs = [];
	
	/** Loop through all the nodes (as per mm.HTMLGraphFinder) and set them up
	 * 
	 * @async
	 */
	graphManager.createAll = async function() {
		for(let x of finder()) {
			let ag = new AbstractGraph(x.objectsUrl, x.typesUrl, x.editor);
			let renderers = [x.renderer];
			let editor = x.editor ? new Editor(ag) : null;
			let interactor = new Interactor(ag, renderers, editor);
			
			_graphs.push([interactor, ag]);
		}
		
		for(let [i, ag] of _graphs) {
			await ag.load();
			i.rerender();
		}
	}
	
	return graphManager;
}));
