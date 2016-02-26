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
})());

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
			if(this._objectsUrl) {
				return Promise.all([
					getfile(this._typesUrl),
					getfile(this._objectsUrl)
				]).then((contents) => {
					this.types = new TypesFile(typeof contents[0] === "string"?JSON.parse(contents[0]):contents[0]);
					this.objects =
						new ObjectsData(typeof contents[1] === "string"?JSON.parse(contents[1]):contents[1], this.types);
					
					this.ready = true;
				});
			}else{
				let typesf = await getfile(this._typesUrl);
				
				this.types = new TypesFile(typeof typesf === "string" ? JSON.parse(typesf) : typesf);
				this.objects = new ObjectsData(emptyGraph, this.types);
				this.ready = true;
			}
		}
		
		/** Deletes the node with the given id, and any edges that happen to link it.
		 * 
		 * Then returns a special object that can be used to recover them.
		 * 
		 * @param {int} id The node to delete.
		 * @return {object} A recovery object
		 */
		cascadingRemoveNode(id) {
			let recovery = {};
			
			let edges = this.objects.getEdgesConnectedToNode(id);
			recovery.edges = edges.map((e) => e.toJson());
			edges.forEach((e) => this.objects.removeEdge(e.id));
			
			let node = this.objects.getNode(id);
			recovery.node = node.toJson();
			this.objects.removeNode(id);
			
			return recovery;
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
})());
