"use strict";

load.provide("mm.Interactor", (function() {
	let getfile = load.require("mm.utils.getfile");
	let textGen = load.require("mm.textGen");
	let ObjectNode = load.require("mm.structs.ObjectNode");
	
	let Pan = load.require("mm.interactions.Pan");
	let Zoom = load.require("mm.interactions.Zoom");
	let HoverView = load.require("mm.interactions.HoverView");
	let EditHelp = load.require("mm.interactions.EditHelp");
	let NodeMove = load.require("mm.interactions.NodeMove");
	let EdgeChange = load.require("mm.interactions.EdgeChange");
	let NodeEdit = load.require("mm.interactions.NodeEdit");
	let EdgeEdit = load.require("mm.interactions.EdgeEdit");
	let Resize = load.require("mm.interactions.Resize");
	let MultiSelect = load.require("mm.interactions.MultiSelect");
	let Keyboard = load.require("mm.interactions.Keyboard");
	let EditSimpleImpExp = load.require("mm.interactions.EditSimpleImpExp");
	let EditUndo = load.require("mm.interactions.EditUndo");
	let InteractorState = load.require("mm.InteractorState");
	
	let _resEditWidget = load.requireResource("interactorResources/editWidget.html");
	let _resDetailsPanel = load.requireResource("interactorResources/detailsPanel.html");
	let _resEditHelp = load.requireResource("interactorResources/editHelp.html");
	let _resResizeWidgets = load.requireResource("interactorResources/resizeWidgets.html");
	let _resViewWidget = load.requireResource("interactorResources/viewWidget.html");
	let _resStyles = load.requireResource("interactorResources/styles.css");
	
	// First of all, insert CSS file
	let cssNode = document.createElement("style");
	cssNode.innerHTML = _resStyles;
	$("head").append(cssNode);
	
	/** An interactor manages the interactions that a user can make with a graph
	 * 
	 * It connects with the renderers, and a list of "Interactions", and forms the glue that holds them together, as
	 *  well as providing "general" access to features shared across all interactions, such as the details panel.
	 * 
	 * @param {mm.structs.AbstractGraph} abstractGraph The abstract graph for the current graph.
	 * @param {array<mm.Renderer>} renderers An array of renderers that are rendering this graph.
	 * @param {?mm.Editor} editor The editor for this graph. Null if editing is disabled.
	 */
	let Interactor = class Interactor {
		constructor(abstractGraph, renderers, editor) {
			/** The abstract graph being interacted with
			 * @type mm.structs.AbstractGraph
			 * @private
			 */
			this._abstractGraph = abstractGraph;
			/** The array of renderers rendering this graph
			 * @type mm.Renderer
			 * @private
			 */
			this._renderers = renderers;
			/** The editor (if editing is enabled, else null) editing this graph
			 * @type mm.Editor
			 * @private
			 */
			this._editor = editor;
			
			/** The handler function called when the details panel closes
			 * 
			 * Null if no such handler exists.
			 * @type ?function()
			 * @private
			 */
			this._detailsSwitch = null;
			
			this._interactorState = new InteractorState(this, this._abstractGraph, editor);
			
			// Tell the renderers of their interactor
			renderers.forEach((r) => r.setInteractor(this));
			
			/** An array of all the interactions
			 * 
			 * To add an interaction, import it and add it to this list. Just be aware that the order is probably
			 * important.
			 * 
			 * @type array<mm.interactions.Interaction>
			 * @private
			 */
			this._interactions = [
				new Pan(this, abstractGraph, editor, this._interactorState),
				new Zoom(this, abstractGraph, editor, this._interactorState),
				new HoverView(this, abstractGraph, editor, this._interactorState),
				new EditHelp(this, abstractGraph, editor, this._interactorState),
				new NodeMove(this, abstractGraph, editor, this._interactorState),
				new EdgeChange(this, abstractGraph, editor, this._interactorState),
				new NodeEdit(this, abstractGraph, editor, this._interactorState),
				new EdgeEdit(this, abstractGraph, editor, this._interactorState),
				new Resize(this, abstractGraph, editor, this._interactorState),
				new MultiSelect(this, abstractGraph, editor, this._interactorState),
				new Keyboard(this, abstractGraph, editor, this._interactorState),
				new EditSimpleImpExp(this, abstractGraph, editor, this._interactorState),
				new EditUndo(this, abstractGraph, editor, this._interactorState)
			];
		}
		
		/** Called by renderers when adding a new node
		 * 
		 * Passes the details onto interactions for them to handle.
		 * @async
		 * @param {mm.Renderer} renderer The renderer that added this node.
		 * @param {mm.Renderer._node} object The jointjs node that was added.
		 * @param {mm.structs.ObjectNode} node The (mindmap) node that was added.
		 */
		async addNode(renderer, object, node) {
			for(let i of this._interactions) {
				i.addNode(renderer, object, node);
			}
		}
		
		/** Called by renderers when adding a new edge
		 * 
		 * Passes the details onto interactions for them to handle.
		 * @async
		 * @param {mm.Renderer} renderer The renderer that added this edge.
		 * @param {joint.dia.Link} object The jointjs link that was added.
		 * @param {mm.structs.ObjectArrow} node The (mindmap) edge that was added.
		 */
		async addEdge(renderer, object, edge) {
			for(let i of this._interactions) {
				i.addEdge(renderer, object, edge);
			}
		}
		
		/** Called by renderers when adding a new canvas
		 * 
		 * Passes the details onto interactions for them to handle.
		 * @async
		 * @param {mm.Renderer} renderer The renderer that added this canvas.
		 * @param {HTMLElement} node The html node for this canvas, the outermost element (with .mm-root)
		 * @param {joint.dia.Graph} graph The jointjs graph that was added.
		 */
		async addCanvas(renderer, node, graph) {
			// Put the widget thing with the zoom things
			$(node).prepend(_resViewWidget);
			
			// And maybe the edit and controls
			if(this._editor) {
				$(node).prepend(_resEditWidget);
				
				$(node).prepend(_resEditHelp);
				
				$(node).find(".mm-inner").prepend(_resResizeWidgets);
			}
			
			// And the details panel
			$(node).append(_resDetailsPanel);
			
			for(let i of this._interactions) {
				i.addCanvas(renderer, node, graph);
			}
		}
		
		/** Causes all the renderers to redraw the graph, in case things have changed */
		rerender() {
			this._interactorState.rerendering = true;
			this._interactions.forEach((i) => i.clean());
			this._renderers.forEach((r) => r.rerender(this._abstractGraph.objects));
			this._interactorState.rerendering = false;
			this.updateMultiSel();
		}
		
		/** Causes the interactor to forget all the nodes and edges it knows about */
		clear() {
			this._nodes = new Map();
			this._edges = [];
		}
		
		/** Returns an [x, y] pair indicating where the mouse is on the given canvas
		 * 
		 * This takes into account scaling.
		 * @param {object} e A jquery mouse event.
		 * @param {mm.Renderer} renderer The renderer for that element.
		 * @return {array<float>} The [x, y] location of the mouse.
		 */
		getMousePos(e, renderer) {
			let elem = renderer.getRoot();
			let scale = renderer.getScale();
			let hMargins = $(elem).find(".mm-inner").outerWidth() - $(elem).find(".mm-inner").innerWidth();
			let vMargins = $(elem).find(".mm-inner").outerHeight() - $(elem).find(".mm-inner").innerHeight();
			
			return [e.pageX + (-$(elem).find("svg").offset().left/* - $(elem).find(".mm-inner")[0].scrollLeft*/),
					e.pageY + (-$(elem).find("svg").offset().top/* - $(elem).find(".mm-inner")[0].scrollTop*/)].map((x) => x / scale);
		}
		
		/** Loads information about a specific object into the details panel and displays it
		 * 
		 * Both nodes and edges are displayed using this function, the type is detected automatically.
		 * 
		 * @param {mm.structs.ObjectNode|mm.structs.ObjectEdge} object The object to display.
		 * @param {mm.Renderer} renderer The renderer to load details with.
		 * @param {boolean=false} show To show the panel.
		 * @param {boolean=false} expand To expard the panel and show more information (for nodes).
		 * @param {boolean=false} force If the panel is already loaded and is expanded, default is to not change it.
		 *  This forces the change.
		 * @param {?function()} handler Function to call when the panel is closed or changes to something else.
		 */
		loadDetails(object, renderer, show, expand, force, handler) {
			let panel = $(renderer.getRoot()).find(".mm-details-panel");
			if(panel.hasClass("long") && !force) return;
			
			if(object instanceof ObjectNode) {
				panel.removeClass("edge");
				panel.find(".mm-details-short").html(textGen.detailsShort(object));
				
				if(!this._editor) {
					panel.find(".mm-details-long").html(textGen.detailsLong(object));
				}else{
					panel.find(".mm-details-edit-type").html(textGen.editSelect(object, this._abstractGraph.types));
					panel.find(".mm-details-edit-width").val(object.width);
					panel.find(".mm-details-edit-inner").html(textGen.editForm(object));
				}
			}else{
				panel.addClass("edge");
				panel.find(".mm-details-short").html("");
				
				if(!this._editor) {
					//panel.find(".mm-details-long").html(textGen.detailsLong(object));
					// Not possible for edges
				}else{
					panel.find(".mm-details-edit-arrow-type").html(textGen.editEdgeSelect(object, this._abstractGraph.types));
					panel.find(".mm-details-edit-arrow-text").val(object.text);
				}
			}
			
			if(show) {
				panel.removeClass("hidden");
			}
			
			if(expand) {
				panel.addClass("long");
			}
			
			if(this._detailsSwitch) this._detailsSwitch();
			this._detailsSwitch = handler;
			
			panel.attr("data-id", object.id);
		}
		
		/** Hides the details panel
		 * 
		 * @param {mm.Renderer} renderer The renderer on which to hide the panel.
		 * @param {boolean=false} evenIfLong By default the panel isn't closed if it is expanded. This forces it to be
		 *  closed even then.
		 * @return {boolean} True if the panel was closed, false if it isn't or it isn't open.
		 */
		hideDetailsPanel(renderer, evenIfLong) {
			let panel = $(renderer.getRoot()).find(".mm-details-panel");
			
			if(panel.hasClass("long") && !evenIfLong) return false;
			if(panel.hasClass("hidden")) return false;
			
			panel.addClass("hidden");
			panel.removeClass("long");
			
			if(this._detailsSwitch) this._detailsSwitch();
			this._detailsSwitch = null;
			return true;
		}
		
		updateMultiSel() {
			for(let r of this._renderers) {
				$(r.getRoot()).find(".mm-selected").each((i, n) => $(n).removeClass("mm-selected"));
				
				for(let n of this._interactorState.getMultiSel()) {
					if(r.getSvgNode(n.id)) {
						$(r.getSvgNode(n.id)).addClass("mm-selected");
					}
				}
			}
		}
		
		/** Undoes an action using the editor
		 * 
		 * This also rerenders the graph, so it should be called rather than on editor directly.
		 * 
		 * @async
		 */
		undo() {
			this._editor.undo();
			this.rerender();
		}
		
		/** Redoes an action using the editor
		 * 
		 * This also rerenders the graph, so it should be called rather than on editor directly.
		 * 
		 * @async
		 */
		redo() {
			this._editor.redo();
			this.rerender();
		}
	};
	
	return Interactor;
}));
