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
	
	/** Interactor for changing the content of edges
	 * 
	 * This does not handle changing what they point to or their curve point (that's done in EdgeChange), this is purely
	 *  about their type, content, addition and deletion.
	 * 
	 * @extends mm.Interaction
	 */
	return class EdgeEdit extends Interaction {
		constructor(interactor, abstractGraph, editor, interactorState) {
			super(interactor, abstractGraph, editor, interactorState);
			
			/** The edge currently being edited
			 * 
			 * @type ?mm.structs.ObjectEdge
			 */
			this._editingEdge = null;
			/** The properties of the editing node from when it started editing
			 * 
			 * So we can revert to this if there is a cancel.
			 * 
			 * @type ?object
			 */
			this._editingBackup = null;
		}
		
		async addEdge(renderer, joint, edge) {
			Interaction.prototype.addEdge.call(this, renderer, joint, edge);
			
			// Get the SVG element
			let svgNode = renderer.getSvgEdge(edge.id);
			
			// When we stop clicking on it
			if(this._editor) $(svgNode).on("mouseup", (e) => {
				// Load up and set the editor
				this._interactor.loadDetails(edge, renderer, true, true, true, this._save.bind(this, renderer));
				this._setEditing(edge);
				
				// Highlight the first input
				let panel = $(svgNode).parents(".mm-root").find(".mm-details-edit-arrow");
				panel.find("input").first().focus();
			});
		}
		
		async addCanvas(renderer, node, graph) {
			// ----
			// Edit and save buttons
			// ----
			$(node).find(".mm-details-edit-arrow-save").click((e) => {
				// Save, default action on closing the details panel, so just close it
				e.preventDefault();
				this._interactor.hideDetailsPanel(renderer, true);
			});
			
			$(node).find(".mm-details-edit-arrow-close").click((e) => {
				// Cancel
				this._cancel(renderer);
				e.preventDefault();
			});
			
			// Save when we click outside, by hiding the details panel
			$(node).on("click", (e) => {
				if(e.target.classList[0] == "mm-background-grid") this._interactor.hideDetailsPanel(renderer, true);
			});
			
			
			// ----
			// Edge deletion
			// ----
			$(node).find(".mm-details-edit-arrow-delete").click((e) => {
				e.preventDefault();
				let editing = this._editingEdge;
				
				// First of all, cancel all edits
				this._cancel(renderer);
				
				// Add a delete event
				this._editor.addToUndoStack("edge_delete", {id:editing.id, json:editing.toJson()});
				
				// Then remove it
				this._abstractGraph.objects.removeEdge(editing.id);
				
				// And rerender the diagram
				this._interactor.rerender();
			});
			
			
			// ----
			// Edge editing
			// ----
			// This is fired when the content of the input field changes
			if(this._editor) $(node).find(".mm-details-edit-arrow").on("input", (e) => {
				// Not editing? Just return
				if(!this._editingEdge) return;
				
				// Get the element to edit
				let editing = this._editingEdge.id;
				
				// Create an object containing the properties we have changed
				let update = {
					text:$(node).find(".mm-details-edit-arrow-text").val(),
					type:$(node).find(".mm-details-edit-arrow-type").val()
				};
				
				// Now check if the type has changed
				let oldTypeName = this._editingEdge.type.name;
				
				// Copy the properties of this object to the model
				this._editingEdge.update(update);
				
				if(this._editingEdge.type.name != oldTypeName) {
					// We have changed type, redraw the diagram
					this._interactor.rerender();
					this._interactor.loadDetails(this._editingEdge, renderer, true, true, true, this._save.bind(this, renderer), true);
				}else{
					// We have not, just update the label then
					this._edges.get(+editing)[1].label(0, {position:0.5, attrs:{text:{text:this._editingEdge.text}}});
				}
			});
			
			// ----
			// Adding a new edge
			// ----
			graph.on("change", (e, i, o, u) => {
				// Check if this is a new edge
				if(i.updateConnectionOnly) return;
				if(e.attributes.type != "link") return;
				if(this._state.rerendering) return;
				
				if("id" in e.attributes.target) {
					// Check if it's an edge we already know about
					if(renderer.getEdgeFromJoint(e.id) !== undefined) return;
					
					// Get target and source
					let t = renderer.getNodeFromJoint(e.attributes.target.id);
					let s = renderer.getNodeFromJoint(e.attributes.source.id);
					
					// Stop connecting to self
					if(s == t) return;
					
					// Make the edge
					let ne = this._abstractGraph.objects.makeNewEdge(s, t);
					
					// And an undo event
					this._editor.addToUndoStack("edge_add", {edge:ne.toJson(), id:ne.id});
					
					// And redraw the diagram
					this._interactor.rerender();
				}
			});
		}
		
		/** Sets the edge that is currently being edited
		 * 
		 * This does not open the details panel.
		 * 
		 * @param {mm.structs.ObjectEdge} edge The edge to edit.
		 * @private
		 */
		_setEditing(edge) {
			this._editingEdge = edge;
			this._editingBackup = edge.toJson();
		}
		
		/** Cancel editing the currently editing edge
		 * 
		 * This will restore its properties to the state it was before editing, and close the details panel.
		 * 
		 * @param {mm.Renderer} renderer The renderer used for editing.
		 * @private
		 */
		_cancel(renderer) {
			// Check if cancelling is possible
			if(!this._editingEdge) return;
			if(!this._edges.get(this._editingEdge.id)) return;
			
			// Close the panel
			this._interactor.hideDetailsPanel(renderer, true, true);
			
			// Check if we need to change back to a previous type
			if(this._editingBackup.type != this._editingEdge.type.name) {
				// We do, so copy the props and rerender the diagram
				this._editingEdge.update(this._editingBackup, ["type", "text"]);
				this._interactor.rerender();
			}else{
				// We don't, so just copy the properties back onto it and update the "preview"
				this._editingEdge.update(this._editingBackup, ["type", "text"]);
				this._edges.get(this._editingEdge.id)[1].label(0, {position:0.5, attrs:{text:{text:this._editingEdge.text}}});
			}
			
			this._editingEdge = null;
		};
		
		/** Save changes to the currently editing edge.
		 * 
		 * This is called when the details panel is closed
		 * 
		 * @param {mm.Renderer} renderer The renderer used for editing.
		 * @private
		 */
		_save(renderer) {
			// See if it has been updated at all
			let change = false;
			if(this._editingBackup.text != this._editingEdge.text) change = true;
			if(this._editingBackup.type != this._editingEdge.type.name) change = true;
			
			// If it has, so add an undo event
			if(change) this._editor.addToUndoStack("edge_edit",
				{id:this._editingEdge.id, old:this._editingBackup, "new":this._editingEdge.toJson()}
			);
			
			this._editingEdge = null;
		}
	};
}));
