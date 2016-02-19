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
				new NodeEdit(this, abstractGraph, editor),
				new EdgeEdit(this, abstractGraph, editor),
				new Resize(this, abstractGraph, editor)
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
			$(node).prepend(_resViewWidget);
			
			// And the details panel
			$(node).prepend(_resDetailsPanel);
			
			// And maybe the edit and controls
			if(this._editor) {
				$(node).prepend(_resEditWidget);
				
				$(node).prepend(_resEditHelp);
				
				$(node).find(".mm-inner").prepend(_resResizeWidgets);
			}
			
			for(let i of this._interactions) {
				i.addCanvas(renderer, node);
			}
			
			// Now set the grid background
			let svg = $(node).find("svg")[0];
			
			let defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
			defs.innerHTML = `
				<pattern id='grid' width='16' height='16' patternUnits='userSpaceOnUse'>
					<path d='M 16 0 L 0 0 0 16' fill='none' stroke='#cccccc' stroke-width='0.5'/>
				</pattern>`;
			svg.insertBefore(defs, svg.firstChild);
			
			let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
			rect.setAttribute("width", "100%");
			rect.setAttribute("height", "100%");
			rect.setAttribute("fill", "url(#grid)");
			rect.setAttribute("class", "mm-background-grid");
			svg.insertBefore(rect, defs);
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
		
		loadNodeDetails(node, renderer, show, expand, force) {
			this.loadDetails(node, renderer, show, expand, force);
		}
		
		loadDetails(object, renderer, show, expand, force) {
			let panel = $(renderer.getRoot()).find(".mm-details-panel");
			if(panel.hasClass("long") && !force) return;
			
			if(object instanceof ObjectNode) {
				panel.removeClass("edge");
				panel.find(".mm-details-short").html(textGen.detailsShort(object));
				
				if(!this._editor) {
					panel.find(".mm-details-long").html(textGen.detailsLong(object));
				}else{
					panel.find(".mm-details-edit-type").html(textGen.editSelect(object, this._abstractGraph.types));
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
			
			panel.attr("data-id", object.id);
		}
		
		hideDetailsPanel(rendererer, evenIfLong) {
			let panel = $(rendererer.getRoot()).find(".mm-details-panel");
			panel.addClass("hidden");
			if(evenIfLong) panel.removeClass("long");
		}
	};
	
	return Interactor;
})());
