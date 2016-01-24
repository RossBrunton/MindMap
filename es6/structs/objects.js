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
			
			for(let x of [ "id", "origin", "dest", "text", "points"]) this[x] = object[x];
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
	};
})());
