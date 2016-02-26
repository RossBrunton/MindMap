"use strict";

load.provide("mm.interactions.NodeMove", (function() {
	let Interaction = load.require("mm.interactions.Interaction");
	
	return class NodeMove extends Interaction {
		async addNode(renderer, joint, node) {
			Interaction.prototype.addNode.call(this, renderer, joint, node);
			
			let svgNode = renderer.getSvgNode(node.id);
			let moving = false;
			
			if(this._editor) $(svgNode).on("mousemove", (e) => {
				if(moving && this._interactor.inMultiSel(node)) {
					let multiSel = this._interactor.getMultiSel();
					
					for(let n of multiSel) {
						if(n == node) continue;
						
						let sn = this._nodes.get(n.id)[1];
						sn.translate(e.originalEvent.movementX, e.originalEvent.movementY);
					}
					
					let edges = this._abstractGraph.connectedEdges(multiSel);
					for(let ed of edges) {
						let je = this._edges.get(ed.id)[1];
						
						je.set("vertices", je.get("vertices").map(function(o) {return {
							x:o.x + e.originalEvent.movementX,
							y:o.y + e.originalEvent.movementY
						}}.bind(this)));
					}
				}
			});
			
			if(this._editor) $(svgNode).on("mousedown", (e) => {
				moving = true;
			});
			
			if(this._editor) $(svgNode).on("mouseup", (e) => {
				// The changed position seems to be in joint.changed.position. Not sure if I'm supposed to use it, but
				// it's public.
				moving = false;
				if(!joint.changed || !joint.changed.position) return;
				
				if(node.x != joint.changed.position.x && node.y != joint.changed.position.y) {
					// Node has been moved
					if(this._interactor.inMultiSel(node)) {
						let multiSel = this._interactor.getMultiSel();
						
						let arg = {nodes:[]};
						
						for(let n of multiSel) {
							let oldPos = [n.x, n.y];
							
							let newPos = this._nodes.get(n.id)[1].get("position");
							
							n.changePosition(newPos.x / renderer.getScale(), newPos.y / renderer.getScale());
							
							arg.nodes.push({id:n.id, old:[oldPos[0], oldPos[1]], "new":[newPos.x, newPos.y]});
						}
						
						this._editor.addToUndoStack("node_multimove", arg);
					}else{
						let oldPos = [node.x, node.y];
					
						node.changePosition(joint.changed.position.x / renderer.getScale(), joint.changed.position.y / renderer.getScale());
					
						this._editor.addToUndoStack("node_move", {id:node.id, old:oldPos, "new":[node.x, node.y]});
					}
					
				}
			});
		}
	};
})());
