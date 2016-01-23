"use strict";

load.provide("mm.Renderer", (function() {
	let ObjectsData = load.require("mm.structs.ObjectsData");
	let TypesFile = load.require("mm.structs.TypesFile");

	const _TEMPLATE =
`<div class='mm-inner'>
	<div class='mm-paper'>
		
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
			 * Null until it is inited.
			 * 
			 * @type ?joint.dia.Paper
			 * @private
			 */
			this._paper = null;
			
			/** The interactor for this renderer.
			 * 
			 * Null until it is added by setInteractor.
			 * 
			 * @type ?mm.Interactor
			 * @private
			 */
			this._interactor = null;
			
			/** True if this has been inited
			 * 
			 * @type boolean
			 */
			this.inited = false;
			
			this._width = 0;
			this._height = 0;
		}
		
		/** Given some objects, renders them from scratch.
		 * 
		 * @param {mm.structs.ObjectsData} objects The objects to render with this.
		 */
		rerender(objects) {
			if(!this.inited) this.init();
			
			// Set dimensions
			this._width = objects.canvas.width;
			this._height = objects.canvas.height;
			this._paper.setDimensions(objects.canvas.width, objects.canvas.height);
			this._paper.setOrigin(objects.canvas.offsetX, objects.canvas.offsetY);
			
			// Now do the nodes
			let nodeIds = new Map();
			
			for(let n of objects.nodes) {
				let rect = new joint.shapes.basic.Rect({
					position:{x:n.x, y:n.y},
					size:{width:100, height:30},
					attrs:{}
				});
				
				rect.attr(n.type.nodeAttr);
				rect.attr("text/text", n.type.nodeText);
				
				this._graph.addCell(rect);
				nodeIds.set(n.id, rect);
				this._interactor.addNode(this, rect);
			}
			
			// Edges
			for(let e of objects.edges) {
				let link = new joint.dia.Link({
					source: {id:nodeIds.get(e.origin).id},
					target: {id:nodeIds.get(e.dest).id},
					vertices:e.points.map(([x, y]) => ({x:x, y:y}))
				});
				
				link.attr({
					"path":{
						fill:"transparent",
					},
					".marker-target": {"fill": "black", "d":"M 10 0 L 0 5 L 10 10 z"}
				});
				link.set("connector", {name:"smooth"});
				link.attr(e.type.attr);
				this._graph.addCell(link);
				this._interactor.addEdge(this, link);
			}
		}
		
		/** Inits the element, by creating the needed elements inside it */
		init() {
			this.node.innerHTML = _TEMPLATE;
			this.node.classList.add("mm-root");
			
			// Set up jointjs
			let graph = this._graph = new joint.dia.Graph();
			
			let paper = this._paper = new joint.dia.Paper({
				el:$(`#${this._id} .mm-paper`),
				model:graph,
				gridSize:1,
				width:0,
				height:0,
				interactive:true//false
			});
			
			this._interactor.addCanvas(this, this.node);
			this.inited = true;
		}
		
		/** Sets the interactor for this Renderer
		 * 
		 * @param {mm.Interactor} interactor The interactor
		 */
		setInteractor(interactor) {
			this._interactor = interactor;
		}
		
		/** Scales the jointJS paper
		 * 
		 * @param {float} scale The amount to scale the paper.
		 */
		scale(scale) {
			this._paper.scale(scale, scale);
			this._paper.setDimensions(this._width*scale, this._height * scale);
		}
	};
})());
