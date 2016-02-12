"use strict";

load.provide("mm.interactions.NodeMove", (function() {
	let Interaction = load.require("mm.interactions.Interaction");
	
	return class NodeMove extends Interaction {
		async addNode(renderer, joint, node) {
			Interaction.prototype.addNode.call(this, renderer, joint, node);
			
			let svgNode = renderer.getSvgNode(node.id);
			
			if(this._editor) $(svgNode).on("mouseup", (e) => {
				// The changed position seems to be in joint.changed.position. Not sure if I'm supposed to use it, but
				// it's public.
				if(!joint.changed || !joint.changed.position) return;
				
				if(node.x != joint.changed.position.x) {
					// Node has been moved
					let oldPos = [node.x, node.y];
					
					node.changePosition(joint.changed.position.x, joint.changed.position.y);
					
					this._editor.addToUndoStack("node_move", {id:node.id, old:oldPos, "new":[node.x, node.y]});
				}
			});
		}
	};
})());
