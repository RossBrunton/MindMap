"use strict";

load.provide("mm.Renderer", (function() {
	let ObjectsData = load.require("mm.structs.ObjectsData");
	let TypesFile = load.require("mm.structs.TypesFile");
	let textGen = load.require("mm.textGen");
	
	/** Text size
	 * 
	 * @type integer
	 * @private
	 * @const
	 */
	const _TEXT_SIZE = 14;
	
	/** Rectangle height
	 * 
	 * @type integer
	 * @const
	 * @private
	 */
	const _NODE_HEIGHT = 30;
	
	/** The basic template to be inserted into the node when it is set up.
	 * 
	 * @const
	 * @private
	 * @type string
	 */
	const _TEMPLATE =
`<div class='mm-inner'>
	<div class='mm-paper'>
		
	</div>
</div>`;
	
	/** The node type for nodes in the graph
	 * 
	 * Similar to a normal rectangle, only it adds a small circle for creating edges from.
	 * @type joint.shape
	 * @private
	 */
	let _node = joint.shapes.basic.Generic.extend({
		markup: `<g class="rotatable">
				
				<g class="scalable"><rect rx='10' ry='10'/></g><text/><g class='outPorts'>
					<circle class='mag mag-a' y-alignment='middle' magnet='true' ref='rect'/>
				</g>
			</g>
		`,

		defaults: joint.util.deepSupplement({
			type:'basic.Rect',
			attrs: {
				'rect': {'follow-scale':true, width:100, height:_NODE_HEIGHT},
				'text': {
					'font-size':_TEXT_SIZE,'ref-x':0.5,'ref-y':0.5, ref:'rect', 'y-alignment':'middle', 'x-alignment':'middle',
					fill:"black"
				},
				'.outPorts circle': {
					r:5,
					fill:'#1ABC9C', // Same colour as jointjs
					ref:'rect',
					"ref-x":0.999,
					"ref-y":0.5
				}
			}
		}, joint.shapes.basic.Generic.prototype.defaults)
	});
	
	/** The counter for new element ids
	 * 
	 * Increased every time a new element is set up, in order for each to have a unique number.
	 * @type integer
	 * @private
	 */
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
			
			/** The scale of this graph
			 * 
			 * All locations of objects are multiplied by this amount.
			 * @type float
			 * @default 1.0
			 * @private
			 */
			this._scale = 1.0;
			
			/** The width of the current diagram
			 * 
			 * @type int
			 * @private
			 */
			this._width = 0;
			/** The height of the current diagram
			 * 
			 * @type int
			 * @private
			 */
			this._height = 0;
			
			/** The editor object
			 * 
			 * Null if editing is disabled.
			 * @type ?dusk.Editor
			 * @private
			 */
			this._editor = editor;
			
			/** A mapping of node ids to their respective jointjs nodes
			 * 
			 * @type Map<int, _node>
			 * @private
			 */
			this._nodeIds = new Map();
			/** A mapping of edge ids to their respective jointjs links
			 * 
			 * @type Map<int, joint.dia.Link>
			 * @private
			 */
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
			this._paper.setDimensions(objects.canvas.width * this._scale, objects.canvas.height * this._scale);
			
			this._paper.options.gridSize = this._scale * 10;
			
			this._graph.clear();
			
			this._nodeIds = new Map();
			this._edgeIds = new Map();
			
			let rootScale = Math.sqrt(this._scale);
			
			for(let n of objects.nodes) {
				if(objects.isHidden(n) && !this._editor) continue;
				
				let tts = textGen.wrapText(textGen.nodeText(n), n.width);
				
				let rect = new _node({
					position:{x:n.x * this._scale, y:n.y * this._scale},
					attrs:n.type.nodeAttr,
					outPorts: ["mag-a"],
					size:{width:n.width*rootScale, height:_NODE_HEIGHT*rootScale},
				});
				
				rect.attr("text/font-size", _TEXT_SIZE * rootScale);
				rect.attr("text/text", tts);
				
				this._graph.addCell(rect);
				this._nodeIds.set(n.id, rect);
				this._interactor.addNode(this, rect, n);
				
				if(objects.isHidden(n)) {
					$(this.getSvgNode(n.id)).addClass("hidden-node");
				}
			}
			
			// Edges
			for(let e of objects.edges) {
				if(objects.isHidden(e) && !this._editor) continue;
				
				let link = new joint.dia.Link({
					source: {id:this._nodeIds.get(e.origin).id},
					target: {id:this._nodeIds.get(e.dest).id},
					vertices:e.points.map(([x, y]) => ({x:x * this._scale, y:y * this._scale}))
				});
				
				link.attr({
					"path":{
						
					},
					".marker-target": {"d":"M 10 0 L 0 5 L 10 10 z"}
				});
				if(e.points.length) link.set("connector", {name:"smooth"});
				link.attr(e.type.attr);
				
				this._graph.addCell(link);
				this._edgeIds.set(e.id, link);
				this._interactor.addEdge(this, link, e);
				
				// Text
				if((e.text || this._editor) && this._scale > 0.7) {
					link.label(0, {
						position: 0.5,
						attrs: e.type.textAttr
					});
					
					link.label(0, {position:0.5, attrs:{rect:{style:"scale:1.3"}, text:{text:e.text}}});
				}
				
				if(objects.isHidden(e)) {
					$(this.getSvgEdge(e.id)).addClass("hidden-edge");
				}
			}
			
			// Grid pattern
			$(`#${this._id}-gridpatt`).attr("width", 16 * this._scale);
			$(`#${this._id}-gridpatt`).attr("height", 16 * this._scale);
			$(`#${this._id}-gridpatt path`).attr("d", "M %i 0 L 0 0 0 %i".replace(/\%i/g, 16 * this._scale));
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
				gridSize:10,
				width:0,
				height:0,
				interactive:this._editor,
				snapLinks:true,
				linkPinning:false,
				perpendicularLinks:true,
				multiLinks:false,
			});
			
			// Now set the grid background
			let svg = $(this.node).find("svg")[0];
			
			let defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
			defs.innerHTML = `
				<pattern id='${this._id}-gridpatt' width='16' height='16' patternUnits='userSpaceOnUse'>
					<path d='M 16 0 L 0 0 0 16' fill='none' stroke='#cccccc' stroke-width='0.5'/>
				</pattern>`;
			svg.insertBefore(defs, svg.firstChild);
			
			let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
			rect.setAttribute("width", "100%");
			rect.setAttribute("height", "100%");
			if(window.navigator.userAgent.includes("MSIE ")) {
				// IE doesn't support this sort of thing
				rect.setAttribute("fill", "#ffffff");
			}else{
				rect.setAttribute("fill", `url(#${this._id}-gridpatt)`);
			}
			
			rect.setAttribute("class", "mm-background-grid");
			svg.insertBefore(rect, defs);
			
			this._interactor.addCanvas(this, this.node, this._graph);
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
			if(!this._nodeIds.get(id)) return null;
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
		
		/** Returns the edge given by the JointJS ID
		 * 
		 * @param {string} jid The edge's JointJS ID.
		 * @return {mm.structs.ObjectEdge} The graph edge.
		 */
		getEdgeFromJoint(jid) {
			for(let [id, v] of this._edgeIds) {
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
		
		/** Sets the scale to display this diagram
		 * 
		 * @param {float} The new scale.
		 */
		setScale(scale) {
			this._scale = scale;
		}
		
		/** Returns the scale this diagram is being desplayed in
		 * 
		 * @return {float} The scale.
		 */
		getScale() {
			return this._scale;
		}
		
		/** Updates the hidden state of a node and it's connected edges
		 * 
		 * Things that are supposed to be hidden are hidden, things that aren't are shown
		 * 
		 * @param {mm.structs.ObjectsData} objects The objects data for the diagram
		 * @param {mm.structs.ObjectNode} node The node to check
		 */
		updateHidden(objects, node) {
			let edges = objects.getEdgesConnectedToNode(node.id);
			
			if(node.hidden) {
				// Supposed to be hidden
				$(this.getSvgNode(node.id)).addClass("hidden-node");
				edges.forEach((e) => $(this.getSvgEdge(e.id)).addClass("hidden-edge"));
			}else{
				// Supposed to be visible
				$(this.getSvgNode(node.id)).removeClass("hidden-node");
				edges.forEach((e) => {if(!objects.isHidden(e)) $(this.getSvgEdge(e.id)).removeClass("hidden-edge")});
			}
		}
	};
}));
