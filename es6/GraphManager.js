"use strict";

load.provide("mm.HTMLGraphFinder", (function() {
	let Renderer = load.require("mm.Renderer");
	
	return function() {
		let out = [];
		
		for(let n of Array.prototype.slice.call(document.querySelectorAll("graph-display"))) {
			out.push({
				renderer: new Renderer(n),
				objectsUrl: n.getAttribute("src"),
				typesUrl: n.getAttribute("types"),
				editor: n.getAttribute("editor") ?
					["true", "1", "editor"].includes(n.getAttribute("editor").toLowerCase())
					: false
			});
		}
		
		return out;
	}
})());


load.provide("mm.graphManager", (function() {
	let AbstractGraph = load.require("mm.structs.AbstractGraph");
	let finder = load.require("mm.HTMLGraphFinder");
    
	/** Controls all the AbstractNodeMaps available, and creates them and their renderers.
	 */
	let graphManager = {};
	
	/** Array of all renderers */
	let _renderers = [];
	
	graphManager.createAll = function() {
		for(let x of finder()) {
			console.log(x);
		}
	}
	
	
	return graphManager;
})());
