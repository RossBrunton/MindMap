"use strict";

load.provide("mm.InteractorState", (function() {
	/** This manages the `state` of all the interactions that should be shared between all interactions
	 * 
	 * At the moment, this is the multiset (of selected nodes) and whether the diagram is rerendering or not.
	 * 
	 * @param {mm.structs.AbstractGraph} The abstract graph for this state.
	 * @param {mm.Interactor} The interactor for this state.
	 * @param {mm.editor} The editor for this state's interactor.
	 */
	return class InteractorState {
		constructor(interactor, abstractGraph, editor) {
			/** The interactor for the state
			 * @type mm.Interactor
			 * @protected
			 */
			this._interactor = interactor;
			/** The abstract graph
			 * @type mm.structs.AbstractGraph
			 * @protected
			 */
			this._abstractGraph = abstractGraph;
			/** The editor for the state, if it exists
			 * @type ?mm.editor
			 * @protected
			 */
			this._editor = editor;
			
			/** True iff the diagram is currently being redrawn (from `Interactor.rerender`)
			 * 
			 * @type boolean
			 */
			this.rerendering = false;
			
			/** The set of all selected nodes
			 * 
			 * @type array<mm.structs.ObjectNode>
			 * @private
			 */
			this._multiSel = [];
		}
		
		/** Adds a new node to the multiset
		 * 
		 * This will update the interactor, making it set the border on all the selected nodes.
		 * 
		 * @param {mm.structs.ObjectNode} node The node to add.
		 */
		addToMultiSel(node) {
			if(this._multiSel.includes(node)) return;
			this._multiSel.push(node);
			this._interactor.updateMultiSel();
		}
		
		/** Returns whether the given node is in the multiset
		 * 
		 * @param {mm.structs.ObjectNode} node The node to check.
		 * @return {boolean} Whether the node is in the diagram.
		 */
		inMultiSel(node) {
			return this._multiSel.some((x) => x == node);
		}
		
		/** Removes the given node from the multiset
		 * 
		 * Updates the interactor as well, removing the node's highlight
		 * 
		 * @param {mm.structs.ObjectNode} node The node to remove
		 */
		removeFromMultiSel(node) {
			this._multiSel = this._multiSel.filter((x) => x != node);
			this._interactor.updateMultiSel();
		}
		
		/** Empties all nodes in the multiset
		 * 
		 * Updates the interactor.
		 */
		clearMultiSel() {
			this._multiSel = [];
			this._interactor.updateMultiSel();
		}
		
		/** Return how many nodes are selected
		 * 
		 * @return {int} The size of the multisel
		 */
		countMultiSel() {
			return this._multiSel.length;
		}
		
		/** Returns the multiset
		 * 
		 * @return {array<mm.structs.ObjectNode>} An array of all the nodes in the multiset.
		 */
		getMultiSel() {
			return this._multiSel;
		}
	}
}));
