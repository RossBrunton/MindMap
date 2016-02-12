"use strict";

load.provide("mm.Renderer", (function() {
	let ObjectsData = load.require("mm.structs.ObjectsData");
	let TypesFile = load.require("mm.structs.TypesFile");
	let textGen = load.require("mm.textGen");

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
		constructor(node, editor) {
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
			
			this._offsetX = 0;
			this._offsetY = 0;
			
			this._editor = editor;
			
			this._nodeIds = new Map();
			this._edgeIds = new Map();
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
			[this._offsetX, this._offsetY] = [objects.canvas.offsetX, objects.canvas.offsetY];
			this._paper.setOrigin(objects.canvas.offsetX, objects.canvas.offsetY);
			this._graph.clear();
			
			for(let n of objects.nodes) {
				let rect = new joint.shapes.basic.Rect({
					position:{x:n.x, y:n.y},
					size:{width:100, height:30},
					attrs:{}
				});
				
				rect.attr(n.type.nodeAttr);
				rect.attr("text/text", textGen.nodeText(n));
				
				this._graph.addCell(rect);
				this._nodeIds.set(n.id, rect);
				this._interactor.addNode(this, rect, n);
			}
			
			// Edges
			for(let e of objects.edges) {
				let link = new joint.dia.Link({
					source: {id:this._nodeIds.get(e.origin).id},
					target: {id:this._nodeIds.get(e.dest).id},
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
				this._edgeIds.set(e.id, link);
				this._interactor.addEdge(this, link, e);
				
				// Text
				if(e.text) {
					link.label(0, {
						position: 0.5,
						attrs: e.type.textAttr
					});
					
					link.label(0, {position:0.5, attrs:{rect:{style:"scale:1.3"}, text:{text:e.text}}});
				}
			}
		}
		
		/** Inits the element, by creating the needed elements inside it */
		init() {
			this.node.innerHTML = _TEMPLATE;
			this.node.classList.add("mm-root");
			if(this._editor) {
				this.node.classList.add("mm-edit");
			}else {
				this.node.classList.add("mm-noedit");
			}
			
			// Set up jointjs
			let graph = this._graph = new joint.dia.Graph();
			
			let paper = this._paper = new joint.dia.Paper({
				el:$(`#${this._id} .mm-paper`),
				model:graph,
				gridSize:1,
				width:0,
				height:0,
				interactive:this._editor,
				snapLinks:true,
				linkPinning:false,
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
		
		/** Returns the offsets of the currently rendered diagram
		 * 
		 * @return {array<integer>} An x,y offset pair.
		 */
		getOffsets() {
			return [this._offsetX, this._offsetY];
		}
		
		/** Returns the root node for this renderer
		 * 
		 * @return {HTMLElement} The root node
		 */
		getRoot() {
			return this.node;
		}
		
		/** Returns the SVGNode for the given (graph) node id
		 * 
		 * @param {int} The node id.
		 * @return {SVGGElement} The SVG node.
		 */
		getSvgNode(id) {
			return $(`[model-id="${this._nodeIds.get(id).id}"]`)[0];
		}
		
		/** Returns the node given by the JointJS ID
		 * 
		 * @param {string} jid The node's JointJS ID.
		 * @return {mm.structs.ObjectNode} The graph node.
		 */
		getNodeFromJoint(jid) {
			for(let [id, v] of this._nodeIds) {
				if(v.id == jid) return id;
			}
		}
		
		/** Returns the SVGNode for the given (edge) node id
		 * 
		 * @param {int} The edge id.
		 * @return {SVGGElement} The SVG node.
		 */
		getSvgEdge(id) {
			return $(`[model-id="${this._edgeIds.get(id).id}"]`)[0];
		}
	};
})());
