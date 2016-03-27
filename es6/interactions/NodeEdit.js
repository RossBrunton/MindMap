"use strict";

load.provide("mm.interactions.NodeEdit", (function() {
	let Interaction = load.require("mm.interactions.Interaction");
	let textGen = load.require("mm.textGen");
	let Editor = load.require("mm.Editor");
	
	Editor.registerUndo("node_edit", function(type, arg, graph) {
		graph.objects.getNode(arg.id).update(arg.old, ["width", "type", "fields", "hidden"]);
	}, function(type, arg, graph) {
		graph.objects.getNode(arg.id).update(arg["new"], ["width", "type", "fields", "hidden"]);
	});
	
	Editor.registerUndo("node_delete", function(type, arg, graph) {
		graph.cascadingRemoveNodeRecovery(arg["recover"]);
	}, function(type, arg, graph) {
		graph.cascadingRemoveNode(arg.id);
	});
	
	Editor.registerUndo("node_add", function(type, arg, graph) {
		graph.objects.removeNode(arg.id);
	}, function(type, arg, graph) {
		graph.objects.insertNode(arg["node"]);
	});
	
	return class NodeEdit extends Interaction {
		constructor(interactor, abstractGraph, editor, state) {
			super(interactor, abstractGraph, editor, state);
			
			this._editingNode = null;
			this._editingBackup = null;
			this._changingType = false;
		}
		
		async addNode(renderer, joint, node) {
			Interaction.prototype.addNode.call(this, renderer, joint, node);
			
			let svgNode = renderer.getSvgNode(node.id);
			
			let x = 0;
			let y = 0;
			
			if(this._editor) $(svgNode).on("mousedown", (e) => {
				x = node.x;
				y = node.y;
			});
			
			if(this._editor) $(svgNode).on("click", (e) => {
				if(this._editingNode) {
					// Do nothing..?
				}
				if(e.shiftKey || e.ctrlKey) return; // Multiselection
				
				// Check if the node was dragged
				if(node.x != x || node.y != y) return;
				
				let panel = $(svgNode).parents(".mm-root").find(".mm-details-panel");
				this._interactor.loadDetails(node, renderer, true, true, true, this._save.bind(this, renderer));
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
				e.preventDefault();
				this._interactor.hideDetailsPanel(renderer, true);
			});
			
			$(node).find(".mm-details-edit-close").click((e) => {
				this._cancel(renderer);
				e.preventDefault();
			});
			
			// Save when we click outside
			$(node).on("click", (e) => {
				if(e.target.classList[0] == "mm-background-grid") this._interactor.hideDetailsPanel(renderer, true)
			});
			
			
			// ----
			// Node deletion
			// ----
			$(node).find(".mm-details-edit-delete").click((e) => {
				if($(node).find(".mm-details-panel").hasClass("edge")) return;
				
				e.preventDefault();
				
				let rec = this._abstractGraph.cascadingRemoveNode(this._editingNode.id);
				this._editor.addToUndoStack("node_delete", {recover:rec, id:this._editingNode.id});
				this._interactor.hideDetailsPanel(renderer, true, true);
				this._cancel(renderer);
				this._interactor.rerender();
				
				this._editingNode = null;
			});
			
			
			// ----
			// Node adding
			// ----
			if(this._editor) $(node).on("dblclick", (e) => {
				if(!$(e.target).hasClass("mm-background-grid")) return;
				let scale = renderer.getScale();
				let [xm, ym] = this._interactor.getMousePos(e, renderer);
				let newNode = this._abstractGraph.objects.makeNewNode(xm, ym);
				this._interactor.rerender();
				this._interactor.loadDetails(this._nodes.get(newNode.id)[2], renderer, true, true, true, this._save.bind(this, renderer));
				this._setEditing(newNode);
				this._editor.addToUndoStack("node_add", {id:newNode.id, node:newNode.toJson()});
				$(node).find(".mm-details-panel input").first().focus();
			});
			
			if(this._editor) $(node).find(".mm-create-button").on("click", (e) => {
				let [xm, ym] = this._interactor.getMousePos(e, renderer);
				let newNode = this._abstractGraph.objects.makeNewNode(xm - 100, ym + 50);
				this._interactor.rerender();
				this._setEditing(newNode);
				this._interactor.loadDetails(this._nodes.get(newNode.id)[2], renderer, true, true, this._save.bind(this, renderer));
				this._editor.addToUndoStack("node_add", {id:newNode.id, node:newNode.toJson()});
			});
			
			
			// ----
			// Node editing
			// ----
			let handler = (e) => {
				if($(node).find(".mm-details-panel").hasClass("edge")) return;
				
				let editing = $(node).find(".mm-details-panel").attr("data-id");
				
				let update = {
					fields:{},
					type:$(node).find(".mm-details-edit-type").val(),
					width:+$(node).find(".mm-details-edit-width").val(),
					hidden:$(node).find(".mm-details-edit-hidden")[0].checked
				};
				
				// Load all the fields
				for(let entry of $(node).find(".mm-details-edit form").serializeArray()) {
					update.fields[entry.name] = entry.value;
				}
				
				// Now check if the type has changed
				let oldTypeName = this._editingNode.type.name;
				this._editingNode.update(update);
				if(this._editingNode.type.name != oldTypeName) {
					this._interactor.rerender();
					this._interactor.loadDetails
						(this._editingNode, renderer, true, true, true, this._save.bind(this, renderer), true);
				}else{
					this._setText(textGen.nodeText(this._nodes.get(+editing)[2]));
				}
				
				this._interactor.updateHidden(this._editingNode);
			};
			
			if(this._editor) $(node).find(".mm-details-edit").on("input", handler);
			if(this._editor) $(node).find(".mm-details-edit-hidden").on("click", handler);
		}
		
		_setEditing(node) {
			this._state.clearMultiSel();
			this._state.addToMultiSel(node);
			
			this._editingNode = node;
			this._editingBackup = node.toJson();
		}
		
		_cancel(renderer) {
			if(!this._editingNode) return;
			if(this._changingType) return;
			
			this._interactor.hideDetailsPanel(renderer, true, true);
			
			if(this._editingBackup.type != this._editingNode.type.name) {
				this._editingNode.update(this._editingBackup, ["width", "type", "fields", "hidden"]);
				this._interactor.rerender();
			}else{
				this._editingNode.update(this._editingBackup, ["width", "type", "fields", "hidden"]);
				this._setText(textGen.nodeText(this._editingNode));
			}
			
			this._interactor.updateHidden(this._editingNode);
			this._editingNode = null;
		}
		
		_save(renderer) {
			// First of all, check if there are any changes to save (otherwise don't bother creating an undo event)
			let change = false;
			for(let v of ["width", "hidden"]) {
				if(this._editingBackup[v] != this._editingNode[v]) change = true;
			}
			if(this._editingBackup.type != this._editingNode.type.name) change = true;
			for(let f in this._editingNode.fields) {
				if(this._editingBackup.fields[f] != this._editingNode.fields[f]) change = true;
			}
			
			if(change) this._editor.addToUndoStack("node_edit",
				{id:this._editingNode.id, old:this._editingBackup, "new":this._editingNode.toJson()}
			);
			this._editingNode = null;
		}
		
		_setText(text) {
			this._nodes.get(+this._editingNode.id)[1].attr("text/text", textGen.wrapText(text, this._editingNode.width));
			this._nodes.get(+this._editingNode.id)[1].resize(this._editingNode.width, 30);
		}
	};
}));
