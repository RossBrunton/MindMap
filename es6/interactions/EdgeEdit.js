"use strict";

load.provide("mm.interactions.EdgeEdit", (function() {
	let Interaction = load.require("mm.interactions.Interaction");
	let textGen = load.require("mm.textGen");
	let Editor = load.require("mm.Editor");
	
	Editor.registerUndo("edge_edit", function(type, arg, graph) {
		graph.objects.getEdge(arg.id).update(arg.old, ["type", "text"]);
	}, function(type, arg, graph) {
		graph.objects.getEdge(arg.id).update(arg["new"], ["type", "text"]);
	});
	
	Editor.registerUndo("edge_delete", function(type, arg, graph) {
		graph.objects.insertEdge(arg.json);
	}, function(type, arg, graph) {
		graph.objects.removeEdge(arg["id"]);
	});
	
	Editor.registerUndo("edge_add", function(type, arg, graph) {
		graph.objects.removeEdge(arg.id);
	}, function(type, arg, graph) {
		graph.objects.insertEdge(arg["edge"]);
	});
	
	return class EdgeEdit extends Interaction {
		constructor(interactor, abstractGraph, editor, interactorState) {
			super(interactor, abstractGraph, editor, interactorState);
			
			this._editingEdge = null;
			this._editingBackup = null;
			this._changingType = false;
			this._commit = false;
		}
		
		async addEdge(renderer, joint, edge) {
			Interaction.prototype.addEdge.call(this, renderer, joint, edge);
			
			let svgNode = renderer.getSvgEdge(edge.id);
			
			if(this._editor) $(svgNode).on("mouseup", (e) => {
				//if(this._editingEdge) return;
				let panel = $(svgNode).parents(".mm-root").find(".mm-details-panel");
				this._interactor.loadDetails(edge, renderer, true, true, true, this._save.bind(this, renderer));
				this._setEditing(edge);
				panel.find("input").first().focus();
				//e.preventDefault();
				//e.stopPropagation();
			});
		}
		
		async addCanvas(renderer, node, graph) {
			// ----
			// Edit and save buttons
			// ----
			$(node).find(".mm-details-edit-arrow-save").click((e) => {
				e.preventDefault();
				this._interactor.hideDetailsPanel(renderer, true);
			});
			
			$(node).find(".mm-details-edit-arrow-close").click((e) => {
				this._interactor.hideDetailsPanel(renderer, true, true);
				this._cancel(renderer);
				e.preventDefault();
			});
			
			//$(node).on("click", (e) => {if(e.target.classList[0] == "mm-background-grid") cancel(e)});
			
			
			// ----
			// Edge deletion
			// ----
			$(node).find(".mm-details-edit-arrow-delete").click((e) => {
				e.preventDefault();
				let editing = this._editingEdge;
				
				this._interactor.hideDetailsPanel(renderer, true, true);
				this._cancel(renderer);
				this._editor.addToUndoStack("edge_delete", {id:editing.id, json:editing.toJson()});
				this._abstractGraph.objects.removeEdge(editing.id);
				
				this._interactor.rerender();
				
				this._editingEdge = null;
			});
			
			
			// ----
			// Edge editing
			// ----
			if(this._editor) $(node).find(".mm-details-edit-arrow").on("input", (e) => {
				if(!this._editingEdge) return;
				let editing = this._editingEdge.id;
				
				let update = {
					text:$(node).find(".mm-details-edit-arrow-text").val(),
					type:$(node).find(".mm-details-edit-arrow-type").val()
				};
				
				// Now check if the type has changed
				let oldTypeName = this._editingEdge.type.name;
				this._editingEdge.update(update);
				if(this._editingEdge.type.name != oldTypeName) {
					this._interactor.rerender();
					this._interactor.loadDetails(this._editingEdge, renderer, true, true, true, this._save.bind(this, renderer), true);
				}else{
					this._edges.get(+editing)[1].label(0, {position:0.5, attrs:{text:{text:this._editingEdge.text}}});
				}
			});
			
			// ----
			// Adding a new edge
			// ----
			graph.on("change", (e, i, o, u) => {
				if(i.updateConnectionOnly) return;
				if(e.attributes.type != "link") return;
				if(this._state.rerendering) return;
				
				if("id" in e.attributes.target) {
					// Check if it's an edge we already know about
					if(renderer.getEdgeFromJoint(e.id) !== undefined) return;
					
					let t = renderer.getNodeFromJoint(e.attributes.target.id);
					let s = renderer.getNodeFromJoint(e.attributes.source.id);
					
					// Stop connecting to self
					if(s == t) return;
					
					let ne = this._abstractGraph.objects.makeNewEdge(s, t);
					
					this._editor.addToUndoStack("edge_add", {edge:ne.toJson(), id:ne.id});
					
					this._interactor.rerender();
				}
			});
		}
		
		_setEditing(edge) {
			this._editingEdge = edge;
			this._editingBackup = edge.toJson();
		}
		
		_cancel(renderer) {
			if(!this._editingEdge) return;
			if(this._commit) return;
			if(!this._edges.get(this._editingEdge.id)) return;
			
			if(this._editingBackup.type != this._editingEdge.type.name) {
				this._editingEdge.update(this._editingBackup, ["type", "text"]);
				this._interactor.rerender();
			}else{
				this._editingEdge.update(this._editingBackup);
				this._edges.get(this._editingEdge.id)[1].label(0, {position:0.5, attrs:{text:{text:this._editingEdge.text}}});
			}
			
			this._editingEdge = null;
		};
		
		_save(renderer) {
			this._editor.addToUndoStack("edge_edit",
				{id:this._editingEdge.id, old:this._editingBackup, "new":this._editingEdge.toJson()}
			);
			this._editingEdge = null;
		}
	};
}));
