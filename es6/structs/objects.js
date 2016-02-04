"use strict";

load.provide("mm.structs.ObjectNode", (function() {
	/** Stores information about a single node
	 * 
	 * The fields "id", "x", "y" and "fields" are visible in this class, and are the same values and purpose as the
	 * source object file.
	 * 
	 * @param {object} object The object representing this node
	 * @param {mm.structs.NodeType} The type of this specific node
	 */
	return class ObjectNode {
		constructor(object, type) {
			/** The type of this node
			 * 
			 * @type mm.structs.NodeType
			 */
			this.type = type;
			
			for(let x of ["id", "x", "y", "fields"]) this[x] = object[x];
		}
		
		getFieldType(field) {
			return this.type.getFieldType(field);
		}
		
		changePosition(x, y) {
			this.x = x;
			this.y = y;
		}
		
		toJson() {
			return {
				type:this.type,
				x:this.x,
				y:this.y,
				id:this.id,
				fields:this.fields,
			}
		}
		
		update(obj) {
			["x", "y"].forEach((x) => {if(x in obj) this[x] = obj[x]});
			
			if("fields" in obj) for(let x in obj.fields) {
				this.fields[x] = obj.fields[x];
			}
		}
	};
})());

load.provide("mm.structs.ObjectEdge", (function() {
	/** Stores information about a single edge between nodes
	 * 
	 * The fields "id", "origin", "dest", "text", "points" are visible in this class, and are the same values and
	 *  purpose as the source object file.
	 * 
	 * @param {object} object The object representing this edge
	 * @param {mm.structs.EdgeType} The type of this specific edge
	 */
	return class ObjectEdge {
		constructor(object, type) {
			/** The type of this edge
			 * 
			 * @type mm.structs.EdgeType
			 */
			this.type = type;
			
			for(let x of ["id", "origin", "dest", "text", "points"]) this[x] = object[x];
		}
		
		changePoints(newPoints) {
			this.points = newPoints;
		}
	};
})());

load.provide("mm.structs.ObjectCanvas", (function() {
	/** Stores information about the canvas
	 * 
	 * The fields "width", "height", "offsetX" and "offsetY" are visible in this class, and are the same values and
	 *  purpose as the source object file.
	 * 
	 * @param {object} object The "canvas" object from the objects file.
	 */
	return class ObjectCanvas {
		constructor(object) {
			for(let x of ["width", "height", "offsetX", "offsetY"]) this[x] = object[x];
		}
	};
})());

load.provide("mm.structs.ObjectsData", (function() {
	let ObjectNode = load.require("mm.structs.ObjectNode");
	let ObjectEdge = load.require("mm.structs.ObjectEdge");
	let ObjectCanvas = load.require("mm.structs.ObjectCanvas");
	
	/** The objects data file as JavaScript classes (with convienince functions, shortcuts, etc.)
	 * 
	 * Constructor builds the information from a given object data, and it uses a provided TypeFile object to determine
	 * its type.
	 * 
	 * @param {string|object} object The objects file (as specified in objects.txt) to build the graph from. If it is a string
	 *  it is parsed as a JSON string.
	 * @param {mm.structs.TypesFile} types Type information about the nodes and edges.
	 */
	return class ObjectsData {
		constructor(object, types) {
			/** The types file
			 * 
			 * @type mm.structs.TypesFile
			 */
			this.types = types;
			
			/** Version of the objects data file, as given by the "version" field
			 * 
			 * @type integer
			 */
			this.version = object.version;
			
			/** An array of nodes in this graph
			 * 
			 * @type array<mm.structs.ObjectNode>
			 */
			this.nodes = object.nodes.map((x) => new ObjectNode(x, this.types.getNodeType(x.type)));
			/** An array of edges in this graph
			 * 
			 * @type array<mm.structs.ObjectEdge>
			 */
			this.edges = object.edges.map((x) => new ObjectEdge(x, this.types.getArrowType(x.type)));
			/** The canvas information object thing
			 * 
			 * @type array<mm.structs.ObjectCanvas>
			 */
			this.canvas = new ObjectCanvas(object.canvas);
			
			// Todo: Editor part
		}
		
		/** Makes a brand new, "empty" node of an unspecified type
		 * 
		 * @param {int=0} x The x coordinate at which to place the node.
		 * @param {int=0} y The y coordinate at which to place the node.
		 */
		makeNewNode(x, y) {
			let highest = 0;
			for(let x of this.nodes) {
				if(x.id >= highest) {
					highest = x.id + highest;
				}
			}
			
			// TODO: Improve selection
			let type = this.types.types[0];
			
			let newNode = {};
			
			newNode.id = highest;
			newNode.type = type.name;
			
			newNode.x = x ? x : 0;
			newNode.y = y ? y : 0;
			
			newNode.fields = {};
			for(let f of type.fields) {
				switch(f.type) {
					case "text":
					case "blockText":
					case "url":
					case "email":
						newNode.fields[f.name] = `[${f.name}]`;
						break;
						
					case "date":
						newNode.fields[f.name] = (new Date()).toJSON();
						break
				}
			}
			
			let n = new ObjectNode(newNode, type);
			this.nodes.push(n);
			return n;
		}
	};
})());
