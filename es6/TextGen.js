"use strict";

/** Namespace for text generation functions
 * 
 * Basically has a number of functions that take in nodes and then output a specific text.
 * 
 */
load.provide("mm.textGen", (function() {
	let strf = load.require("mm.utils.strf");
	
	let textGen = {};
	
	/** Generates text for displaying on the actual nodes on the diagram
	 * 
	 * Uses the `nodeText` template from the types file.
	 * 
	 * @param {mm.structs.ObjectNode} node The node to generate text for.
	 * @return {string} The text to display on the node.
	 */
	textGen.nodeText = function(node) {
		return strf(node.type.nodeText, node)
	};
	
	/** Generates text for displaying on the node's "short" details plane
	 * 
	 * That is, the first part that is visible on rolling over the node.
	 * 
	 * Uses the `viewText` template from the types file.
	 * 
	 * @param {mm.structs.ObjectNode} node The node to generate text for.
	 * @return {string} The text to display on the details plane.
	 */
	textGen.detailsShort = function(node) {
		return strf(node.type.viewText, node);
	};
	
	/** Generates text for displaying on the node's "long" details plane
	 * 
	 * That is, the extra information visible on clicking the node.
	 * 
	 * Uses the `viewAddText` template from the types file.
	 * 
	 * @param {mm.structs.ObjectNode} node The node to generate text for.
	 * @return {string} The text to display on the details plane.
	 */
	textGen.detailsLong = function(node) {
		return strf(node.type.viewAddText, node);
	};
	
	/** Generates HTML for displaying in the node's type select widget
	 * 
	 * @param {mm.structs.ObjectNode} node The node to generate options for.
	 * @param {mm.structs.TypesFile} typesFile The types file containing the options.
	 * @return {string} The text to display as the select value.
	 */
	textGen.editSelect = function(node, types) {
		let hold = "";
		
		for(let x of types.types) {
			hold += `<option value='${x.name}' ${x == node.type ? "" : "selected"}>${x.name}</option>`;
		}
		
		return hold;
	};
	
	return textGen;
})());
