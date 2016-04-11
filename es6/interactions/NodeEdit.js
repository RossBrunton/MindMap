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
	
	/** Interactor for changing the content of nodes
	 * 
	 * This does not handle changing their location (which is in NodeMove), this is purely about their type, content,
	 *  addition and deletion.
	 * 
	 * @extends mm.Interaction
	 */
	return class NodeEdit extends Interaction {
		constructor(interactor, abstractGraph, editor, state) {
			super(interactor, abstractGraph, editor, state);
			
			/** The node currently being edited
			 * 
			 * @type ?mm.structs.ObjectNode
			 */
			this._editingNode = null;
			/** The properties of the editing node from when it started editing
			 * 
			 * So we can revert to this if there is a cancel.
			 * 
			 * @type ?object
			 */
			this._editingBackup = null;
		}
		
		async addNode(renderer, joint, node) {
			Interaction.prototype.addNode.call(this, renderer, joint, node);
			
			// Get the SVG element
			let svgNode = renderer.getSvgNode(node.id);
			
			// The x and y location when the mouse button was pressed
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
				if(e.shiftKey || e.ctrlKey) return; // Multiselection handles this
				
				// Check if the node was dragged, if the location of the mouse is different than the location it was
				//  when clicked, continue
				if(node.x != x || node.y != y) return;
				
				// Open the details panel and set up editing
				this._interactor.loadDetails(node, renderer, true, true, true, this._save.bind(this, renderer));
				this._setEditing(node);
				
				// Focus on the first input element
				let panel = $(svgNode).parents(".mm-root").find(".mm-details-panel");
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
				// Close the details panel, which saves
				e.preventDefault();
				this._interactor.hideDetailsPanel(renderer, true);
			});
			
			$(node).find(".mm-details-edit-close").click((e) => {
				// Cancel the input
				this._cancel(renderer);
				e.preventDefault();
			});
			
			// Save when we click outside, by hiding the details panel
			$(node).on("click", (e) => {
				if(e.target.classList[0] == "mm-background-grid") this._interactor.hideDetailsPanel(renderer, true)
			});
			
			
			// ----
			// Node deletion
			// ----
			$(node).find(".mm-details-edit-delete").click((e) => {
				// If the thing we are editing is an edge, don't do anything
				if($(node).find(".mm-details-panel").hasClass("edge")) return;
				
				e.preventDefault();
				
				// Delete the node and all it is attached to
				let rec = this._abstractGraph.cascadingRemoveNode(this._editingNode.id);
				
				// Create the undo event
				this._editor.addToUndoStack("node_delete", {recover:rec, id:this._editingNode.id});
				
				// Cancel the details panel
				this._cancel(renderer);
				
				// Redraw the diagram
				this._interactor.rerender();
			});
			
			
			// ----
			// Node adding
			// ----
			if(this._editor) $(node).on("dblclick", (e) => {
				// If we have double clicked on something other than the background, do nothing
				if(!$(e.target).hasClass("mm-background-grid")) return;
				
				// Get the location
				let [xm, ym] = this._interactor.getMousePos(e, renderer);
				
				// Create the node
				let newNode = this._abstractGraph.objects.makeNewNode(xm, ym);
				
				// Redraw the screen
				this._interactor.rerender();
				
				// Open up the panel for editing
				this._interactor.loadDetails(this._nodes.get(newNode.id)[2], renderer, true, true, true, this._save.bind(this, renderer));
				this._setEditing(newNode);
				$(node).find(".mm-details-panel input").first().focus();
				
				// And add the undo event
				this._editor.addToUndoStack("node_add", {id:newNode.id, node:newNode.toJson()});
			});
			
			if(this._editor) $(node).find(".mm-create-button").on("click", (e) => {
				// Now for the button, rather than double clicking
				// Location is offset from the button
				let [xm, ym] = this._interactor.getMousePos(e, renderer);
				let newNode = this._abstractGraph.objects.makeNewNode(xm - 100, ym + 50);
				
				// And redraw screen
				this._interactor.rerender();
				
				// Set up the editor
				this._interactor.loadDetails(this._nodes.get(newNode.id)[2], renderer, true, true, this._save.bind(this, renderer));
				this._setEditing(newNode);
				$(node).find(".mm-details-panel input").first().focus();
				
				// And add the undo thing
				this._editor.addToUndoStack("node_add", {id:newNode.id, node:newNode.toJson()});
			});
			
			
			// ----
			// Node editing
			// ----
			let handler = (e) => {
				// Called when the input of the panel changes
				
				// Ignore if an edge is being edited
				if($(node).find(".mm-details-panel").hasClass("edge")) return;
				
				// Get the id of the node being edited
				let editing = $(node).find(".mm-details-panel").attr("data-id");
				
				// Create an object containing the updated values
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
					// It has, so rerender the diagram
					this._interactor.rerender();
					this._interactor.loadDetails
						(this._editingNode, renderer, true, true, true, this._save.bind(this, renderer), true);
				}else{
					// It hasn't, so just update the text
					this._setText(textGen.nodeText(this._nodes.get(+editing)[2]));
				}
				
				// And update the visibility thing, so that invisible nodes turn invisible
				this._interactor.updateHidden(this._editingNode);
			};
			
			if(this._editor) $(node).find(".mm-details-edit").on("input", handler);
			if(this._editor) $(node).find(".mm-details-edit-hidden").on("click", handler);
		}
		
		/** Sets the node that is currently being edited
		 * 
		 * This does not open the details panel, but it does clear the multiple selection.
		 * 
		 * @param {mm.structs.ObjectEdge} edge The edge to edit.
		 * @private
		 */
		_setEditing(node) {
			this._state.clearMultiSel();
			this._state.addToMultiSel(node);
			
			this._editingNode = node;
			this._editingBackup = node.toJson();
		}
		
		/** Cancel editing the currently editing node
		 * 
		 * This will restore its properties to the state it was before editing, and close the details panel.
		 * 
		 * @param {mm.Renderer} renderer The renderer used for editing.
		 * @private
		 */
		_cancel(renderer) {
			// Check if we can cancel
			if(!this._editingNode) return;
			
			// Close the details panel
			this._interactor.hideDetailsPanel(renderer, true, true);
			
			// Check if we need to change back to a previous type
			if(this._editingBackup.type != this._editingNode.type.name) {
				// We do, copy and rerender the diagram
				this._editingNode.update(this._editingBackup, ["width", "type", "fields", "hidden"]);
				this._interactor.rerender();
			}else{
				// Nope, so just update the text
				this._editingNode.update(this._editingBackup, ["width", "type", "fields", "hidden"]);
				this._setText(textGen.nodeText(this._editingNode));
			}
			
			this._interactor.updateHidden(this._editingNode);
			this._editingNode = null;
		}
		
		/** Save changes to the currently editing node
		 * 
		 * This is called automatically when the details panel is closed
		 * 
		 * @param {mm.Renderer} renderer The renderer used for editing.
		 * @private
		 */
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
			
			// If there is a change, add an undo event
			if(change) this._editor.addToUndoStack("node_edit",
				{id:this._editingNode.id, old:this._editingBackup, "new":this._editingNode.toJson()}
			);
			
			this._editingNode = null;
		}
		
		/** Generate the text for the currently being edited node
		 * 
		 * The given text will be calcualted (via `textGen`) and then set as appropriate, as well as this, the width
		 *  of the node will be set too.
		 * 
		 * @param {string} text The text to set.
		 * @private
		 */
		_setText(text) {
			this._nodes.get(+this._editingNode.id)[1].attr("text/text", textGen.wrapText(text, this._editingNode.width));
			this._nodes.get(+this._editingNode.id)[1].resize(this._editingNode.width, 30);
		}
	};
}));
