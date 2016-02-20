"use strict";

load.provide("mm.interactions.Interaction", (function() {
	/** Subclasses of this type represent a single "module" that can be used to interact the diagram
	 * 
	 * The class has three functions that are called when a node, edge or canvas is added to the graph. These will
	 * allow you to attach listeners to them in order to interact with the diagram.
	 * 
	 * You will probably want to add this to the mm.Interactor's array of interactions if you want it to actually do
	 * anything.
	 */
	return class Interaction {
		/** Constructs a new interaction
		 * 
		 * @param {mm.Interactor} interactor The interactor for this interaction.
		 * @param {mm.structs.AbstractGraph} abstractGraph The abstract graph.
		 * @param {?mm.Editor} editor The editor for this graph. Will be null if editing is disabled.
		 */
		constructor(interactor, abstractGraph, editor) {
			/** The interactor for this interaction
			 * @type mm.Interactor
			 * @protected
			 */
			this._interactor = interactor;
			/** The abstract graph
			 * @type mm.structs.AbstractGraph
			 * @protected
			 */
			this._abstractGraph = abstractGraph;
			/** The editor for this interaction, if it exists
			 * @type ?mm.editor
			 * @protected
			 */
			this._editor = editor;
			
			/** A mapping from (diagram) node ids to [renderer, joint, node] triples as per addNode
			 * @type Map<int, array>
			 * @protected
			 */
			this._nodes = new Map();
			/** A mapping from (diagram) edge ids to [renderer, joint, edge] triples as per addEdge
			 * @type Map<int, array>
			 * @protected
			 */
			this._edges = new Map();
		}
		
		/** Called when a new node is added to the diagram
		 * 
		 * @async
		 * @param {mm.Renderer} renderer The renderer that added the node.
		 * @param {joint.dia.Element} joint The joint element that was added.
		 * @param {mm.objects.ObjectNode} node The node of the diagram.
		 */
		async addNode(renderer, joint, node) {
			this._nodes.set(node.id, [renderer, joint, node]);
		}
		
		/** Called when a new edge is added to the diagram
		 * 
		 * @async
		 * @param {mm.Renderer} renderer The renderer that added the node.
		 * @param {joint.dia.Link} joint The joint link that was added.
		 * @param {mm.objects.ObjectEdge} node The edge of the diagram.
		 */
		async addEdge(renderer, joint, edge) {
			this._edges.set(edge.id, [renderer, joint, edge]);
		}
		
		/** Called when a new canvas is added to the diagram
		 * 
		 * @async
		 * @param {mm.Renderer} renderer The renderer that added the node.
		 * @param {HTMLElement} html The HTML element that was added.
		 */
		async addCanvas(renderer, html) {
			// Pass
		}
		
		/** Called by the Interactor when it is being rerendered, asking the Interaction to delete all the nodes and
		 * edges it knows about.
		 */
		clean() {
			this._edges = new Map();
			this._nodes = new Map();
		}
		
		/** Iterates through all the edges of the given iterator
		 * 
		 * @param {mm.Renderer} renderer The renderer that added the edges.
		 * @yield {array} A [renderer, joint, edge] triplet as per the arguments to addEdge.
		 */
		*myEdges(renderer) {
			for(let e of this._edges.values()) {
				if(e[0] == renderer) yield e;
			}
		}
		
		/** Iterates through all the nodes of the given iterator
		 * 
		 * @param {mm.Renderer} renderer The renderer that added the node.
		 * @yield {array} A [renderer, joint, node] triplet as per the arguments to addNode.
		 */
		*myNodes(renderer) {
			for(let e of this._nodes.values()) {
				if(e[0] == renderer) yield e;
			}
		}
	};
})());
