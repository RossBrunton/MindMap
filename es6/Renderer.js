"use strict";

load.provide("mm.Renderer", (function() {
	let ObjectsData = load.require("mm.structs.ObjectsData");
	let TypesFile = load.require("mm.structs.TypesFile");
	
	/** This is given a HTML node (of type graph-display) and creates all the necessary HTML children and updates it 
	 * if needed.
	 * 
	 * @param {HTMLElement} node The node to use. Must be a plain HTMLElement, not a JQuery object.
	 */
	return class Renderer {
		constructor(node) {
			/** The HTML node */
			this.node = node;
			
			console.log(node);
		}
	};
})());
