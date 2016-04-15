"use strict";

load.provide("mm.structs.emptyGraph", (function() {
	/** Just a simple, emtpy graph
	 * 
	 * For use when a graph is needed, but none is provided.
	 * @type object
	 */
	return {
		"version":1,
		"nodes":[],
		"edges":[],
		"canvas":{
			"height":200,
			"width":200,
		}
	};
}));

load.provide("mm.structs.AbstractGraph", (function() {
	let TypesFile = load.require("mm.structs.TypesFile");
	let ObjectsData = load.require("mm.structs.ObjectsData");
	let getfile = load.require("mm.utils.getfile");
	let emptyGraph = load.require("mm.structs.emptyGraph");
	
	/** This represents a graph. */
	return class AbstractGraph {
		constructor(objectsUrl, typesUrl) {
			/** True if this object is ready for use (that is, the files have been downloaded)
			 * 
			 * @type boolean
			 */
			this.ready = false;
			
			/** When downloaded, the types file object.
			 * 
			 * @type mm.structs.TypesFile
			 * @private
			 */
			this.types = null;
			/** When downloaded, the objects data object.
			 * 
			 * @type mm.structs.ObjectsData
			 * @private
			 */
			this.objects = null;
			
			/** The url of the types file
			 * @type string
			 * @private
			 */
			this._typesUrl = typesUrl;
			/** The url of the objects file
			 * @type string
			 * @private
			 */
			this._objectsUrl = objectsUrl;
		}
		
		/** Downloads the data from the files passed in the constructor
		 * 
		 * @async
		 */
		async load() {
			// If it is an object, return it. If it is a string, JSON.parse it.
			let jsonMaybe = function(o) {
				if(typeof o === "string") return JSON.parse(o);
				return o;
			}
			
			if(this._objectsUrl) {
				// We have an objects file to download
				return Promise.all([
					getfile(this._typesUrl),
					getfile(this._objectsUrl)
				]).then((contents) => {
					this.types = new TypesFile(jsonMaybe(contents[0]));
					this.objects =
						new ObjectsData(jsonMaybe(contents[1]), this.types);
					
					this.ready = true;
				});
			}else{
				// We only have a types file
				let typesf = await getfile(this._typesUrl);
				
				this.types = new TypesFile(jsonMaybe(typesf));
				this.objects = new ObjectsData(emptyGraph, this.types);
				this.ready = true;
			}
		}
		
		/** Deletes the node with the given id, and any edges that happen to link it.
		 * 
		 * Then returns a special object that can be used to recover them.
		 * 
		 * You can either specify one node, or multiple nodes. If specifying multiple, they all get deleted.
		 * 
		 * @param {int|node|array<node>} id The node(s) to delete.
		 * @return {object} A recovery object
		 */
		cascadingRemoveNode(nodes) {
			// Object used to recover
			let recovery = {edges:[], nodes:[]};
			
			// Make sure the input is an array of node ids, rather than anything else
			if(!Array.isArray(nodes)) nodes = [nodes];
			nodes = nodes.map((x) => typeof(x) == "number" ? x : x.id);
			
			// And loop through them
			for(let n of nodes) {
				// Make sure to delete and collect the edges as well
				let edges = this.objects.getEdgesConnectedToNode(n);
				recovery.edges = recovery.edges.concat(edges.map((e) => e.toJson()));
				edges.forEach((e) => this.objects.removeEdge(e.id));
				
				let node = this.objects.getNode(n);
				recovery.nodes.push(node.toJson());
				this.objects.removeNode(n);
			}
			
			return recovery;
		}
		
		/** Recovers the nodes and edges deleted by cascadingRemoveNode
		 * 
		 * @param {object} recover The recovery object.
		 */
		cascadingRemoveNodeRecovery(recover) {
			for(let n of recover.nodes) {
				this.objects.insertNode(n);
			}
			
			for(let e of recover.edges) {
				this.objects.insertEdge(e);
			}
		}
		
		/** Returns an array of links where both ends are connected to a node in the given set.
		 * 
		 * @param {array<mm.structs.ObjectNode>} nodes The set of nodes to find edges for.
		 * @return {array<mm.structs.ObjectEdge>} All edges connected between any nodes.
		 */
		connectedEdges(nodes) {
			return this.objects.edges.filter((e) => 
				nodes.some((n) => e.origin == n.id) && nodes.some((n) => e.dest == n.id)
			);
		}
	};
}));
