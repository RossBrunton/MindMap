"use strict";

load.provide("mm.interactions.NodeEdit", (function() {
	let Interaction = load.require("mm.interactions.Interaction");
	let textGen = load.require("mm.textGen");
	
	return class NodeEdit extends Interaction {
		constructor(interactor, abstractGraph, editor) {
			super(interactor, abstractGraph, editor);
			
			this._editingNode = null;
			this._editingBackup = null;
		}
		
		async addNode(renderer, joint, node) {
			Interaction.prototype.addNode.call(this, renderer, joint, node);
			
			let svgNode = renderer.getSvgNode(node.id);
			
			if(this._editor) $(svgNode).on("click", (e) => {
				if(this._editingNode) return;
				let panel = $(svgNode).parents(".mm-root").find(".mm-details-panel");
				this._interactor.loadNodeDetails(node, renderer, true, true, true);
				this._setEditing(node);
				panel.find("input").first().focus();
				e.preventDefault();
				e.stopPropagation();
			});
		}
		
		async addCanvas(renderer, node) {
			// ----
			// Edit and save buttons
			// ----
			$(node).find(".mm-details-edit-save").click((e) => {
				this._interactor.hideDetailsPanel(renderer, true);
				e.preventDefault();
				this._editor.addToUndoStack("node_edit",
					{id:this._editingNode.id, old:this._editingBackup, "new":this._editingNode.toJson()}
				);
				this._editingNode = null;
			});
			
			$(node).find(".mm-details-edit-close").click((e) => {
				this._interactor.hideDetailsPanel(renderer, true);
				e.preventDefault();
				
				if(this._editingBackup.type != this._editingNode.type.name) {
					this._editingNode.update(this._editingBackup);
					this._interactor.rerender();
				}else{
					this._editingNode.update(this._editingBackup);
					this._nodes.get(+this._editingNode.id)[1].attr("text/text", textGen.nodeText(this._editingNode));
				}
				
				this._editingNode = null;
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
					this._interactor.rerender();
					this._interactor.loadNodeDetails(this._editingNode, renderer, true, true, true);
				}else{
					this._nodes.get(+editing)[1].attr("text/text", textGen.nodeText(this._nodes.get(+editing)[2]));
				}
			});
		}
		
		_setEditing(node) {
			this._editingNode = node;
			this._editingBackup = node.toJson();
		}
	};
})());
