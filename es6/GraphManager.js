"use strict";

load.provide("mm.HTMLGraphFinder", (function() {
	let Renderer = load.require("mm.Renderer");
	
	return function*() {
		for(let n of Array.from(document.querySelectorAll("graph-display"))) {
			yield {
				renderer: new Renderer(n),
				objectsUrl: n.getAttribute("src"),
				typesUrl: n.getAttribute("types"),
				editor: n.getAttribute("editor") ?
					["true", "1", "editor"].includes(n.getAttribute("editor").toLowerCase())
					: false
			};
		}
	}
})());


load.provide("mm.graphManager", (function() {
	let AbstractGraph = load.require("mm.structs.AbstractGraph");
	let finder = load.require("mm.HTMLGraphFinder");
	let Interactor = load.require("mm.Interactor");
    
	/** Controls all the AbstractNodeMaps available, and creates them and their renderers.
	 */
	let graphManager = {};
	
	/** Array of all the interactors known about */
	let _graphs = [];
	
	/** Loop through all the nodes (as per mm.HTMLGraphFinder) and set them up */
	graphManager.createAll = function() {
		for(let x of finder()) {
			let ag = new AbstractGraph(x.objectsUrl, x.typesUrl);
			let renderers = [x.renderer];
			let interactor = new Interactor(ag, renderers);
			
			_graphs.push(interactor);
		}
	}
	
	
	return graphManager;
})());
