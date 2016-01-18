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
		constructor(node, types) {
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
			
			/** The joint.js graph used for this node
			 * 
			 * Null until it is inited.
			 * 
			 * @type ?joint.dia.Graph
			 * @private
			 */
			this._graph = null;
			/** The joint.js paper used for this node
			 * 
			 * Null until it is inited
			 * 
			 * @type ?joint.dia.Paper
			 * @private
			 */
			this._paper = null;
			
			
			this.init();
		}
		
		rerender(objects) {
			// Set dimensions
			this._paper.setDimensions(objects.canvas.width, objects.canvas.height);
			this._paper.setOrigin(objects.canvas.offsetX, objects.canvas.offsetY);
			
			// Now do the nodes
			let nodeIds = new Map();
			
			for(let n of objects.nodes) {
				let rect = new joint.shapes.basic.Rect({
					position:{x:n.x, y:n.y},
					size:{width:100, height:30},
					attrs:n.type.nodeAttr
				});
				
				rect.attr("text/text", n.type.nodeText);
				
				this._graph.addCell(rect);
				nodeIds.set(n.id, rect);
			}
			
			// Edges
			for(let e of objects.edges) {
				let link = new joint.dia.Link({
					source: {id:nodeIds.get(e.origin).id},
					target: {id:nodeIds.get(e.dest).id},
					attr:e.type.attr,
					vertices:e.points.map(([x, y]) => ({x:x, y:y}))
				});
				
				this._graph.addCell(link);
			}
		}
		
		/** Inits the element, by creating the needed elements inside it */
		init() {
			this.node.innerHTML = _TEMPLATE;
			this.node.classList.add("_mm_root");
			
			// Set up jointjs
			let graph = this._graph = new joint.dia.Graph();
			
			let paper = this._paper = new joint.dia.Paper({
				el:$(`#${this._id} ._mm_paper`),
				model:graph,
				gridSize:1,
				width:0,
				height:0,
				interactive:true//false
			});
		}
	};
})());
