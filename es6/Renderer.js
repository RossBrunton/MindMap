"use strict";

load.provide("mm.Renderer", (function() {
	let ObjectsData = load.require("mm.structs.ObjectsData");
	let TypesFile = load.require("mm.structs.TypesFile");

	const _TEMPLATE =
`<div class='_mm_inner'>
	<div class='_mm_paper'>
		
	</div>
</div>`;
	
	let _idCount = 1;
	
	/** This is given a HTML node (of type graph-display) and creates all the necessary HTML children and updates it 
	 * if needed.
	 * 
	 * @param {HTMLElement} node The node to use. Must be a plain HTMLElement, not a JQuery object.
	 */
	return class Renderer {
		constructor(node, types, objects) {
			/** The HTML node
			 * 
			 * @type HTMLElement
			 */
			this.node = node;
			
			if(!this.node.id) this.node.id = "_mm_root_"+(_idCount++);
			/** A unique ID for this renderer
			 * 
			 * This will be the id (which is created if it doesn't exist, and used if it does) of the graph-display
			 *  element.
			 * 
			 * @type integer|string
			 * @private
			 */
			this._id = this.node.id;
			
			this.init();
		}
		
		rerender(objects) {
			console.log(objects);
		}
		
		/** Inits the element, by creating the needed elements inside it */
		init() {
			this.node.innerHTML = _TEMPLATE;
			this.node.classList.add("_mm_root");
		}
	};
})());
