"use strict";

load.provide("mm.interactions.EdgeEdit", (function() {
	let Interaction = load.require("mm.interactions.Interaction");
	let textGen = load.require("mm.textGen");
	
	return class EdgeEdit extends Interaction {
		constructor(interactor, abstractGraph, editor) {
			super(interactor, abstractGraph, editor);
			
			this._editingEdge = null;
			this._editingBackup = null;
		}
		
		async addEdge(renderer, joint, edge) {
			Interaction.prototype.addEdge.call(this, renderer, joint, edge);
			
			let svgNode = renderer.getSvgEdge(edge.id);
			
			if(this._editor) $(svgNode).on("click", (e) => {
				if(this._editingEdge) return;
				let panel = $(svgNode).parents(".mm-root").find(".mm-details-panel");
				this._interactor.loadDetails(edge, renderer, true, true, true);
				this._setEditing(edge);
				panel.find("input").first().focus();
				e.preventDefault();
				e.stopPropagation();
			});
		}
		
		async addCanvas(renderer, node) {
			/*// ----
			// Edit and save buttons
			// ----
			$(node).find(".mm-details-edit-save").click((e) => {
				this._interactor.hideDetailsPanel(renderer, true);
				e.preventDefault();
				this._editor.addToUndoStack("node_edit",
					{id:this._editingEdge.id, old:this._editingBackup, "new":this._editingEdge.toJson()}
				);
				this._editingEdge = null;
			});
			
			let cancel = () => {
				this._interactor.hideDetailsPanel(renderer, true);
				
				if(this._editingBackup.type != this._editingEdge.type.name) {
					this._editingEdge.update(this._editingBackup);
					this._interactor.rerender();
				}else{
					this._editingEdge.update(this._editingBackup);
					this._nodes.get(+this._editingEdge.id)[1].attr("text/text", textGen.nodeText(this._editingEdge));
				}
				
				this._editingEdge = null;
			};
			
			$(node).find(".mm-details-edit-close").click((e) => {cancel(), e.preventDefault()});
			
			$(node).on("click", (e) => {if(e.target.localName == "svg") cancel(e)});
			
			
			// ----
			// Node deletion
			// ----
			$(node).find(".mm-details-edit-delete").click((e) => {
				this._interactor.hideDetailsPanel(renderer, true);
				e.preventDefault();
				
				let rec = this._abstractGraph.cascadingRemoveNode(this._editingEdge.id);
				this._editor.addToUndoStack("node_delete", {recover:rec});
				
				this._interactor.rerender();
				
				this._editingEdge = null;
			});
			
			
			// ----
			// Node adding
			// ----
			if(this._editor) $(node).on("dblclick", (e) => {
				if(e.target.localName != "svg") return;
				let [xo, yo] = renderer.getOffsets();
				let [xm, ym] = this._interactor.getMousePos(e, node);
				let newNode = this._abstractGraph.objects.makeNewNode(xm - xo, ym - yo);
				this._interactor.rerender();
				this._setEditing(newNode);
				this._interactor.loadNodeDetails(this._nodes.get(newNode.id)[2], renderer, true, true);
			});
			
			if(this._editor) $(node).find(".mm-create-button").on("click", (e) => {
				let [xo, yo] = renderer.getOffsets();
				let [xm, ym] = this._interactor.getMousePos(e, node);
				let newNode = this._abstractGraph.objects.makeNewNode(xm - 100 - xo, ym + 50 - yo);
				this._interactor.rerender();
				this._setEditing(newNode);
				this._interactor.loadNodeDetails(this._nodes.get(newNode.id)[2], renderer, true, true);
			});*/
			
			
			// ----
			// Edge editing
			// ----
			if(this._editor) $(node).find(".mm-details-edit-arrow").on("input", (e) => {
				let editing = this._editingEdge.id;
				
				let update = {
					text:$(node).find(".mm-details-edit-arrow-text").val(),
					type:$(node).find(".mm-details-edit-arrow-type").val()
				};
				
				// Now check if the type has changed
				let oldTypeName = this._editingEdge.type.name;
				this._editingEdge.update(update);
				if(this._editingEdge.type.name != oldTypeName) {
					console.log("Different");
					this._interactor.rerender();
					this._interactor.loadNodeDetails(this._editingEdge, renderer, true, true, true);
				}else{
					this._edges.get(+editing)[1].label(0, {position:0.5, attrs:{text:{text:this._editingEdge.text}}});
				}
			});
		}
		
		_setEditing(edge) {
			this._editingEdge = edge;
			this._editingBackup = edge.toJson();
		}
	};
})());
