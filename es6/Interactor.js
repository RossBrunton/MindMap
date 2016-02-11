"use strict";

load.provide("mm.Interactor", (function() {
	let getDirName = load.require("mm.utils.getDirName");
	let getfile = load.require("mm.utils.getfile");
	let textGen = load.require("mm.textGen");
	
	let Pan = load.require("mm.interactions.Pan");
	let Zoom = load.require("mm.interactions.Zoom");
	let HoverView = load.require("mm.interactions.HoverView");
	
	let _dir = getDirName("Interactor.js") + "interactorResources/";
	
	// First of all, load the CSS file
	let cssNode = document.createElement("link");
	cssNode.rel = "stylesheet";
	cssNode.type = "text/css";
	cssNode.href = _dir + "styles.css";
	$("head").append(cssNode);
	
	let Interactor = class Interactor {
		constructor(abstractGraph, renderers, editor) {
			this._abstractGraph = abstractGraph;
			this._renderers = renderers;
			this._editor = editor;
			
			renderers.forEach((r) => r.setInteractor(this));
			
			this._edges = [];
			this._nodes = new Map();
			
			this._editingNode = null;
			this._editingBackup = null;
			
			this._vertexChangeEvent = null;
			
			this._interactions = [
				new Pan(this, abstractGraph, editor),
				new Zoom(this, abstractGraph, editor),
				new HoverView(this, abstractGraph, editor)
			];
		}
		
		addNode(renderer, object, node) {
			console.log("Node added: %o for %o", object, node);
			
			for(let i of this._interactions) {
				i.addNode(renderer, object, node);
			}
			
			let svgNode = $(`[model-id="${object.id}"]`)[0];
			
			// ----
			// Hangle mouse hover thing
			// ----
			// Would love to have defined panel here to avoid copy-paste, but the node probably isn't added yet
			$(svgNode).on("click", (e) => {
				let panel = $(svgNode).parents(".mm-root").find(".mm-details-panel");
				this._setEditing(node);
				panel.find("input").first().focus();
				e.preventDefault();
				e.stopPropagation();
			});
			
			// ----
			// Position changes
			// ----
			$(svgNode).on("mouseup", (e) => {
				// The changed position seems to be in object.changed.position. Not sure if I'm supposed to use it, but
				// it's public.
				if(!object.changed || !object.changed.position) return;
				
				if(node.x != object.changed.position.x) {
					// Node has been moved
					let oldPos = [node.x, node.y];
					
					node.changePosition(object.changed.position.x, object.changed.position.y);
					
					this._editor.addToUndoStack("node_move", {id:node.id, old:oldPos, "new":[node.x, node.y]});
				}
			});
			
			this._nodes.set(node.id, [renderer, object, node, svgNode]);
		}
		
		addEdge(renderer, object, edge) {
			console.log(`Edge added: ${edge}`);
			
			for(let i of this._interactions) {
				i.addEdge(renderer, object, edge);
			}
			
			this._edges.push([renderer, object, edge]);
			
			// ----
			// Edge changes
			// ----
			object.on("change:vertices", (e, o) => {
				this._vertexChangeEvent = [edge, e];
			});
		}
		
		async addCanvas(renderer, node) {
			console.log(`Canvas added: ${node}`);
			
			// Put the widget thing with the zoom things
			let widgetHtml = await getfile(_dir + "viewWidget.html");
			$(node).prepend(widgetHtml);
			
			// And the details panel
			let detailsHtml = await getfile(_dir + "detailsPanel.html");
			$(node).prepend(detailsHtml);
			
			// And maybe the edit and controls
			if(this._editor) {
				let editWidgetHtml = await getfile(_dir + "editWidget.html");
				$(node).prepend(editWidgetHtml);
				
				let editHelp = await getfile(_dir + "editHelp.html");
				$(node).prepend(editHelp);
			}
			
			
			// ----
			// Clear details panel
			// ----
			if(!this._editor) node.addEventListener("mousedown", (e) => {
				let panel = $(node).find(".mm-details-panel");
				panel.removeClass("long");
			});
			
			
			// ----
			// Edit and save buttons
			// ----
			$(node).find(".mm-details-edit-save").click((e) => {
				let panel = $(node).find(".mm-details-panel");
				panel.removeClass("long");
				e.preventDefault();
				this._editor.addToUndoStack("node_edit",
					{id:this._editingNode.id, old:this._editingBackup, "new":this._editingNode.toJson()}
				);
			});
			
			$(node).find(".mm-details-edit-close").click((e) => {
				let panel = $(node).find(".mm-details-panel");
				panel.removeClass("long");
				e.preventDefault();
				
				if(this._editingBackup.type != this._editingNode.type.name) {
					this._editingNode.update(this._editingBackup);
					this.rerender();
				}else{
					this._editingNode.update(this._editingBackup);
					this._nodes.get(+this._editingNode.id)[1].attr("text/text", textGen.nodeText(this._editingNode));
				}
			});
			
			
			// ----
			// Edit Help
			// ----
			$(node).find(".mm-help-button").click((e) => $(node).find(".mm-edit-help").removeClass("hidden"));
			$(node).find(".mm-edit-help").click((e) => $(node).find(".mm-edit-help").addClass("hidden"));
			
			
			// ----
			// Vertex change action thing
			// ----
			$(node).on("mouseup", (e) => {
				// This doesn't handle mouse going out of widget
				if(this._vertexChangeEvent) {
					let [edge, e] = this._vertexChangeEvent;
					let oldVerts = edge.points;
					
					edge.changePoints(e.attributes.vertices.map(x => [x.x, x.y]));
					
					if(this._editor) this._editor.addToUndoStack("edge_change", {id:edge.id, old:oldVerts, "new":edge.points});
					
					this._vertexChangeEvent = null;
				}
			});
			
			
			// ----
			// Node adding
			// ----
			if(this._editor) $(node).on("dblclick", (e) => {
				let [xo, yo] = renderer.getOffsets();
				let [xm, ym] = this._getMousePos(e, node);
				let newNode = this._abstractGraph.objects.makeNewNode(xm - xo, ym - yo);
				this.rerender();
				this._setEditing(newNode);
				this._loadDetails(this._nodes.get(newNode.id)[2], node, true, true);
			});
			
			
			// ----
			// Node editing
			// ----
			if(this._editor) $(node).find(".mm-details-edit").on("input", (e) => {
				let editing = $(node).find(".mm-details-panel").attr("data-id");
				
				let update = {fields:{}, type:$(node).find(".mm-details-edit-type").val()};
				
				// Load all the fields
				for(let entry of $(node).find(".mm-details-edit form").serializeArray()) {
					update.fields[entry.name] = entry.value;
				}
				
				// Now check if the type has changed
				let oldTypeName = this._editingNode.type.name;
				this._editingNode.update(update);
				if(this._editingNode.type.name != oldTypeName) {
					this.rerender();
					this._loadDetails(this._editingNode, node, true, true, true);
				}else{
					this._nodes.get(+editing)[1].attr("text/text", textGen.nodeText(this._nodes.get(+editing)[2]));
				}
			});
			
			for(let i of this._interactions) {
				i.addCanvas(renderer, node);
			}
		}
		
		rerender() {
			this._renderers.forEach((r) => r.rerender(this._abstractGraph.objects));
		}
		
		clear() {
			this._nodes = new Map();
			this._edges = [];
		}
		
		_getMousePos(e, elem) {
			return [e.pageX - $(elem).offset().left + $(elem).find(".mm-inner")[0].scrollLeft,
					e.pageY - $(elem).offset().top + $(elem).find(".mm-inner")[0].scrollTop]
		}
		
		loadNodeDetails(node, rendererer, show, expand, force) {
			let panel = $(rendererer.getRoot()).find(".mm-details-panel");
			if(panel.hasClass("long") && !force) return;
			
			panel.find(".mm-details-short").html(textGen.detailsShort(node));
			
			if(!this._editor) {
				panel.find(".mm-details-long").html(textGen.detailsLong(node));
			}else{
				panel.find(".mm-details-edit-type").html(textGen.editSelect(node, this._abstractGraph.types));
				panel.find(".mm-details-edit-inner").html(textGen.editForm(node));
			}
			
			if(show) {
				panel.removeClass("hidden");
			}
			
			if(expand) {
				panel.addClass("long");
			}
			
			panel.attr("data-id", node.id);
		}
		
		hideDetailsPanel(rendererer) {
			let panel = $(rendererer.getRoot()).find(".mm-details-panel");
			panel.addClass("hidden");
		}
		
		_loadDetails(node, root, show, expand, force) {
			let panel = $(root).find(".mm-details-panel");
			if(panel.hasClass("long") && !force) return;
			
			panel.find(".mm-details-short").html(textGen.detailsShort(node));
			
			if(!this._editor) {
				panel.find(".mm-details-long").html(textGen.detailsLong(node));
			}else{
				panel.find(".mm-details-edit-type").html(textGen.editSelect(node, this._abstractGraph.types));
				panel.find(".mm-details-edit-inner").html(textGen.editForm(node));
			}
			
			if(show) {
				panel.removeClass("hidden");
			}
			
			if(expand) {
				panel.addClass("long");
			}
			
			panel.attr("data-id", node.id);
		}
		
		_setEditing(node) {
			this._editingNode = node;
			this._editingBackup = node.toJson();
		}
	};
	
	return Interactor;
})());
