"use strict";

load.provide("mm.Interactor", (function() {
	let getDirName = load.require("mm.utils.getDirName");
	let getfile = load.require("mm.utils.getfile");
	let textGen = load.require("mm.textGen");
	
	let _dir = getDirName("Interactor.js") + "interactorResources/";
	
	// First of all, load the CSS file
	let cssNode = document.createElement("link");
	cssNode.rel = "stylesheet";
	cssNode.type = "text/css";
	cssNode.href = _dir + "styles.css";
	$("head").append(cssNode);
	
	return class Interactor {
		constructor(abstractGraph, renderers, editor) {
			this._abstractGraph = abstractGraph;
			this._renderers = renderers;
			this._editor = editor;
			
			this._abstractGraph.setInteractor(this);
			renderers.forEach((r) => r.setInteractor(this));
			
			this._edges = [];
			this._nodes = new Map();
			
			this._editingNode = null;
			this._editingBackup = null;
			
			this._vertexChangeEvent = null;
		}
		
		addNode(renderer, object, node) {
			console.log("Node added: %o for %o", object, node);
			
			let svgNode = $(`[model-id="${object.id}"]`)[0];
			
			// ----
			// Hangle mouse hover thing
			// ----
			// Would love to have defined panel here to avoid copy-paste, but the node probably isn't added yet
			$(svgNode).on("mousemove", (e) => {
				this._loadDetails(node, $(svgNode).parents(".mm-root"), true);
			});
			
			$(svgNode).on("mouseout", (e) => {
				let panel = $(svgNode).parents(".mm-root").find(".mm-details-panel");
				panel.addClass("hidden");
			});
			
			$(svgNode).on("click", (e) => {
				let panel = $(svgNode).parents(".mm-root").find(".mm-details-panel");
				panel.addClass("long");
				this._setEditing(node);
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
			
			// Vars in this closure
			let scale = 1.0;
			let mouseDown = false;
			let startX = 0;
			let startY = 0;
			
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
			// Zoom
			// ----
			let _updateZoom = (mod) => {
				let oldscale = scale;
				scale += mod;
				if(scale < 0.2) scale = 0.2;
				
				//renderer.scale(scale);
				
				this._nodes.forEach((x) => {
					
					x[1].position(x[2].x * scale, x[2].y * scale);
					
					/*$(x[3]).find("text").css("font-size", `${(1/scale) * 100}%`);
					x[1].attr("rect/height", (x[1].attr("rect/height")/(1/oldscale)) * (1/scale));
					x[1].attr("rect/width", (x[1].attr("rect/width")/(1/oldscale)) * (1/scale));*/
				});
				//$(node).find(".mm-paper").css("font-size", `${(1/scale) * 100}%`);
				
				this._edges.forEach((x) => {
					
					x[1].set("vertices", x[2].points.map(([x, y]) => ({x:x * scale, y:y * scale})));
					
					/*$(x[3]).find("text").css("font-size", `${(1/scale) * 100}%`);
					x[1].attr("rect/height", (x[1].attr("rect/height")/(1/oldscale)) * (1/scale));
					x[1].attr("rect/width", (x[1].attr("rect/width")/(1/oldscale)) * (1/scale));*/
				});
			}
			
			// Widget zoom buttons
			$(node).find(".mm-zoom-in").click((e) => _updateZoom(0.3));
			$(node).find(".mm-zoom-out").click((e) => _updateZoom(-0.3));
			
			// Scroll zoom
			$(node).on('mousewheel DOMMouseScroll', function(e){
				// Browser compatability! :D
				if("detail" in e.originalEvent && e.originalEvent.detail) {
					if(e.originalEvent.detail > 0) {
						_updateZoom(-0.1);
					}else{
						_updateZoom(0.1);
					}
				}else{
					if(e.originalEvent.deltaY > 0) {
						_updateZoom(-0.1);
					}else{
						_updateZoom(0.1);
					}
				}
				
				e.preventDefault();
			});
			
			
			// ----
			// Pan
			// ----
			node.addEventListener("mousedown", function(e) {
				mouseDown = true;
				startX = e.clientX;
				startY = e.clientY;
			});

			node.addEventListener("mousemove", function(e) {
				if(mouseDown) {
					$(node).find(".mm-inner")[0].scrollTop -= e.movementY;
					$(node).find(".mm-inner")[0].scrollLeft -= e.movementX;
				}
			});

			$(node).on("mouseup mouseout", function(e) {
				mouseDown = false;
			});
			
			
			// ----
			// Clear details panel
			// ----
			if(!this._editor) node.addEventListener("mousedown", (e) => {
				let panel = $(node).find(".mm-details-panel");
				panel.removeClass("long");
			});
			$(node).find(".mm-details-edit-close").click((e) => {
				let panel = $(node).find(".mm-details-panel");
				panel.removeClass("long");
				e.preventDefault();
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
					
					this._editor.addToUndoStack("edge_change", {id:edge.id, old:oldVerts, "new":edge.points});
					
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
				
				let update = {fields:{}};
				for(let entry of $(node).find(".mm-details-edit form").serializeArray()) {
					update.fields[entry.name] = entry.value;
				}
				
				this._editingNode.update(update);
				
				this._nodes.get(+editing)[1].attr("text/text", textGen.nodeText(this._nodes.get(+editing)[2]));
			});
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
		
		_loadDetails(node, root, show, expand) {
			let panel = $(root).find(".mm-details-panel");
			if(panel.hasClass("long")) return;
			
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
})());
