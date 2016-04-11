"use strict";

load.provide("mm.interactions.NodeMove", (function() {
	let Interaction = load.require("mm.interactions.Interaction");
	let Editor = load.require("mm.Editor");
	
	Editor.registerUndo("node_move", function(type, arg, graph) {
		graph.objects.getNode(arg.id).update({x: arg.old[0], y: arg.old[1]});
	}, function(type, arg, graph) {
		graph.objects.getNode(arg.id).update({x: arg["new"][0], y: arg["new"][1]});
	});
	
	Editor.registerUndo("node_multimove", function(type, arg, graph) {
		for(let n of arg.nodes) graph.objects.getNode(n.id).update({x:n.old[0], y:n.old[1]});
		for(let e of arg.edges) graph.objects.getEdge(e.id).points = e.old;
	}, function(type, arg, graph) {
		for(let n of arg.nodes) graph.objects.getNode(n.id).update({x:n["new"][0], y:n["new"][1]});
		for(let e of arg.edges) graph.objects.getEdge(e.id).points = e["new"];
	});
	
	/** Interactor for moving nodes
	 * 
	 * As well as single nodes, this also manages moving many nodes at once.
	 * 
	 * @extends mm.Interaction
	 */
	return class NodeMove extends Interaction {
		constructor(interactor, abstractGraph, editor, state) {
			super(interactor, abstractGraph, editor, state);
			
			/** This is a map from renderers to whichever node they are moving
			 * 
			 * May be null if no node is being moved.
			 * 
			 * @type Map<mm.Renderer, mm.structs.ObjectNode>
			 * @private
			 */
			this._moves = new Map();
		}
		
		async addNode(renderer, joint, node) {
			Interaction.prototype.addNode.call(this, renderer, joint, node);
			
			if(this._editor) $(svgNode).on("mousedown", (e) => {
				// Don't move a node if we click on the circle
				if(e.target.tagName == "circle") return;
				
				// Otherwise, set the node as being what this renderer is moving
				this._moves.set(renderer, node);
			});
		}
		
		async addCanvas(renderer, html) {
			// This is the "current mouse location", it is used to detect how much movement has happened between events
			let [cx, cy] = [0, 0];
			
			if(this._editor) $(html).on("mousedown", (e) => {
				// When we first click, set the mouse location
				[cx, cy] = [e.clientX, e.clientY];
			});
			
			if(this._editor) $(html).on("mousemove", (e) => {
				// Only do logic if we are actually moving a node
				if(this._moves.has(renderer) && this._moves.get(renderer)) {
					let multiSel = this._state.getMultiSel();
					let moving = this._moves.get(renderer);
					
					// The library handles this logic itself, but if we have multiple nodes selected (and are dragging
					//  one), we need to move them manually
					if(this._state.inMultiSel(moving)) {
						// Mouse change
						let [deltaX, deltaY] = [e.clientX -cx, e.clientY - cy];
						[cx, cy] = [e.clientX, e.clientY];
						
						for(let n of multiSel) {
							if(n == moving) continue;
							
							// Move each node
							let sn = this._nodes.get(n.id)[1];
							sn.translate(deltaX, deltaY);
						}
						
						let edges = this._abstractGraph.connectedEdges(multiSel);
						for(let ed of edges) {
							let je = this._edges.get(ed.id)[1];
							
							// And the points on each edge connected to the nodes
							je.set("vertices", je.get("vertices").map(function(o) {return {
								x:o.x + deltaX,
								y:o.y + deltaY
							}}.bind(this)));
						}
					}
				}
			});
			
			
			let _stopMove = (e) => {
				// Called when a node stops moving
				let movedNode = this._moves.get(renderer);
				if(!movedNode) return;
				
				let movedNodeJoint = this._nodes.get(movedNode.id)[1];
				
				// The changed position seems to be in joint.changed.position. Not sure if I'm supposed to use it, but
				// it's public.
				let newPos = movedNodeJoint.get("position");
				let [npx, npy] = [newPos.x / renderer.getScale(), newPos.y / renderer.getScale()];
				
				// Next, chehck if there actually was a move, rather than just a click
				if(movedNode.x != npx || movedNode.y != npy) {
					if(this._state.inMultiSel(movedNode)) {
						// We are moving many nodes
						let multiSel = this._state.getMultiSel();
						
						// This will be used to undo and redo the changes
						let arg = {nodes:[], edges:[]};
						
						for(let n of multiSel) {
							let oldPos = [n.x, n.y];
							
							let newPos = this._nodes.get(n.id)[1].get("position");
							newPos.x /= renderer.getScale();
							newPos.y /= renderer.getScale();
							
							// Tell the data structure about the node's new position
							n.changePosition(newPos.x, newPos.y);
							
							arg.nodes.push({id:n.id, old:[oldPos[0], oldPos[1]], "new":[newPos.x, newPos.y]});
						}
						
						let edges = this._abstractGraph.connectedEdges(multiSel);
						for(let ed of edges) {
							let je = this._edges.get(ed.id)[1];
							
							// And update the points of edges, too!
							arg.edges.push({id:ed.id, "new":je.get("vertices").map(
								(o) => [o.x / renderer.getScale(), o.y / renderer.getScale()]
							), old:ed.points});
						}
						
						this._editor.addToUndoStack("node_multimove", arg);
					}else{
						// We are only moving one node
						let oldPos = [movedNode.x, movedNode.y];
					
						movedNode.changePosition(npx, npy);
					
						this._editor.addToUndoStack("node_move", {id:movedNode.id, old:oldPos, "new":[movedNode.x, movedNode.y]});
					}
				}
				
				this._moves.set(renderer, null);
			};
			
			if(this._editor) $(html).on("mouseup", _stopMove);
			if(this._editor) $(html).mouseleave(_stopMove);
		}
	};
}));
