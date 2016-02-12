"use strict";

load.provide("mm.Interactor", (function() {
	let getDirName = load.require("mm.utils.getDirName");
	let getfile = load.require("mm.utils.getfile");
	let textGen = load.require("mm.textGen");
	
	let Pan = load.require("mm.interactions.Pan");
	let Zoom = load.require("mm.interactions.Zoom");
	let HoverView = load.require("mm.interactions.HoverView");
	let EditHelp = load.require("mm.interactions.EditHelp");
	let NodeMove = load.require("mm.interactions.NodeMove");
	let EdgeChange = load.require("mm.interactions.EdgeChange");
	let NodeEdit = load.require("mm.interactions.NodeEdit");
	
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
			
			this._interactions = [
				new Pan(this, abstractGraph, editor),
				new Zoom(this, abstractGraph, editor),
				new HoverView(this, abstractGraph, editor),
				new EditHelp(this, abstractGraph, editor),
				new NodeMove(this, abstractGraph, editor),
				new EdgeChange(this, abstractGraph, editor),
				new NodeEdit(this, abstractGraph, editor)
			];
		}
		
		async addNode(renderer, object, node) {
			console.log("Node added: %o for %o", object, node);
			
			for(let i of this._interactions) {
				i.addNode(renderer, object, node);
			}
		}
		
		async addEdge(renderer, object, edge) {
			console.log(`Edge added: ${edge}`);
			
			for(let i of this._interactions) {
				i.addEdge(renderer, object, edge);
			}
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
		
		getMousePos(e, elem) {
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
		
		hideDetailsPanel(rendererer, evenIfLong) {
			let panel = $(rendererer.getRoot()).find(".mm-details-panel");
			panel.addClass("hidden");
			if(evenIfLong) panel.removeClass("long");
		}
	};
	
	return Interactor;
})());
