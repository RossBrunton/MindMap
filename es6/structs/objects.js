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
			
			for(let x of ["id", "x", "y", "fields", "width", "hidden"]) this[x] = object[x];
		}
		
		/** Gets the field type of the specified field
		 * 
		 * @param {string} field The name of the field to look up.
		 * @return {mm.structs.NodeType} The field type of that field.
		 */
		getFieldType(field) {
			return this.type.getFieldType(field);
		}
		
		/** Adds the x and y oordinate to the location
		 * @param {int} x The x coordinate.
		 * @param {int} y The y coordinate.
		 */
		translate(x, y) {
			this.x += x;
			this.y += y;
		}
		
		/** Updates the x and y locations of this node
		 * @param {int} x The x coordinate.
		 * @param {int} y The y coordinate.
		 */
		changePosition(x, y) {
			this.x = x;
			this.y = y;
		}
		
		/** Converts this node into a JSON format
		 * 
		 * This is the same format as used to create it.
		 * 
		 * @return {object} The JSON version of this node.
		 */
		toJson() {
			let fields = {}
			for(let x in this.fields) fields[x] = this.fields[x];
			
			return {
				type:this.type.name,
				x:this.x,
				y:this.y,
				id:this.id,
				fields:fields,
				width:this.width,
				hidden:this.hidden
			}
		}
		
		/** Given the JSON representation of a node, updates this node to match it
		 * 
		 * Any fields or values from the object that are absent will be left alone.
		 * 
		 * @param {object} obj The object to copy from.
		 * @param {?array<string>} fields An array of fields (of obj) to copy, any fields not in this list will be
		 *  ignored. If this arg isn't specified, all fields are copied.
		 */
		update(obj, fields) {
			if(fields === undefined) fields = ["x", "y", "width", "type", "fields", "hidden"];
			if("type" in obj && fields.includes("type")) this.changeType(obj.type);
			
			["x", "y", "width", "hidden"].forEach((x) => {if(x in obj && fields.includes(x)) this[x] = obj[x]});
			
			if("fields" in obj && fields.includes("fields")) for(let x in obj.fields) {
				this.fields[x] = obj.fields[x];
			}
		}
		
		/** Changes the type of this node to a new type
		 * 
		 * @param {string} newTypeName The name of the type to change to.
		 */
		changeType(newTypeName) {
			if(this.type.name == newTypeName) return;
			
			this.type = this.type.getOtherType(newTypeName);
			
			// Now update all the fields if needed
			for(let f of this.type.fields) {
				if(f.name in this.fields) continue;
				
				if(f.default) {
					this.fields[f.name] = f.default;
				}else{
					switch(f.type) {
						case "text":
						case "blockText":
						case "url":
						case "email":
							this.fields[f.name] = "";
							break;
							
						case "date":
							this.fields[f.name] = (new Date()).toJSON();
							break
					}
				}
			}
		}
	};
}));

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
		
		/** Changes the vertices of this edge
		 * 
		 * @param {array<array<int>>} newPoints The new points around which to curve, as an array of [x, y] pairs.
		 */
		changePoints(newPoints) {
			this.points = newPoints;
		}
		
		/** Converts this node into a JSON format
		 * 
		 * This is the same format as used to create it.
		 * 
		 * @return {object} The JSON version of this node.
		 */
		toJson() {
			return {
				type:this.type.name,
				origin:this.origin,
				dest:this.dest,
				text:this.text,
				points:this.points,
				id:this.id,
			}
		}
		
		/** Given the JSON representation of an edge, updates this edge to match it
		 * 
		 * Any fields or values from the object that are absent will be left alone.
		 * 
		 * @param {object} obj The object to copy from.
		 * @param {?array<string>} fields An array of fields (of obj) to copy, any fields not in this list will be
		 *  ignored. If this arg isn't specified, all fields are copied.
		 */
		update(obj, fields) {
			if(fields === undefined) fields = ["type", "text", "origin", "dest", "points"];
			if("type" in obj && fields.includes("type")) this.changeType(obj.type);
			
			["text", "origin", "dest", "points"].forEach((x) => {if(x in obj && fields.includes(x)) this[x] = obj[x]});
		}
		
		/** Changes the type of this edge to a new type
		 * 
		 * @param {string} newTypeName The name of the type to change to.
		 */
		changeType(newTypeName) {
			if(this.type.name == newTypeName) return;
			
			this.type = this.type.getOtherType(newTypeName);
		}
		
		/** Checks if the connections for this node are valid.
		 * 
		 * @param {array<int>} nodeIds An array of node ids.
		 * @return {bool} Whether this node is connected properly.
		 */
		isValid(nodeIds) {
			return nodeIds.includes(this.origin) && nodeIds.includes(this.dest);
		}
	};
}));

load.provide("mm.structs.ObjectCanvas", (function() {
	/** Stores information about the canvas
	 * 
	 * The fields "width", "height", "offsetX" and "offsetY" are visible in this class, and are the same values and
	 *  purpose as the source object file.
	 * 
	 * @param {object} object The "canvas" object from the objects file.
	 * @param {function(int, int)} translateFn A function that takes an x,y pair and translates everything by that
	 *  value, called when space is added at the top.
	 */
	return class ObjectCanvas {
		constructor(object, translateFn) {
			for(let x of ["width", "height", "initialZoom", "initialX", "initialY"]) this[x] = object[x];
			
			this._translateFn = translateFn;
		}
	
		/** Adds the given amount of pixels to the top of the document
		 * 
		 * This adjusts the offset such that it looks like the added space is "new" at the top.
		 * 
		 * @param {integer} n The number of pixels to increase the size by.
		 */
		addTop(n) {
			this.height += n;
			this._translateFn(0, n);
		}
		
		/** Adds the given amount of pixels to the left of the document
		 * 
		 * This adjusts the offset such that it looks like the added space is "new" at the left.
		 * 
		 * @param {integer} n The number of pixels to increase the size by.
		 */
		addLeft(n) {
			this.width += n;
			this._translateFn(n, 0);
		}
		
		/** Adds the given amount of pixels to the right of the document
		 * 
		 * @param {integer} n The number of pixels to increase the size by.
		 */
		addRight(n) {
			this.width += n;
		}
		
		/** Adds the given amount of pixels to the bottom of the document
		 * 
		 * @param {integer} n The number of pixels to increase the size by.
		 */
		addBottom(n) {
			this.height += n;
		}
		
		/** Exports the canvas to a JSON format
		 * 
		 * In the same format as the "canvas" property of the input file.
		 * @return {object} The JSON of this canvas.
		 */
		toJson() {
			return {
				width:this.width,
				height:this.height,
				initialZoom:this.initialZoom,
				initialX:this.initialX,
				initialY:this.initialY
			}
		}
	};
}));

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
			this.version = -1;
			
			/** An array of nodes in this graph
			 * 
			 * @type array<mm.structs.ObjectNode>
			 */
			this.nodes = [];
			/** An array of edges in this graph
			 * 
			 * @type array<mm.structs.ObjectEdge>
			 */
			this.edges = [];
			/** The canvas information object thing
			 * 
			 * @type array<mm.structs.ObjectCanvas>
			 */
			this.canvas = null;
			
			this.reload(object);
			
			// Todo: Editor part
		}
		
		/** Reloads all the nodes from a data object from the data file
		 * 
		 * @param {object} object The data object.
		 */
		reload(object) {
			this.nodes = [];
			this.edges = [];
			
			this.version = object.version;
			
			this.nodes = object.nodes.map((x) => new ObjectNode(x, this.types.getNodeType(x.type)));
			this.edges = object.edges.map((x) => new ObjectEdge(x, this.types.getArrowType(x.type)));
			
			let nids = this.nodes.map((n) => n.id);
			this.edges = this.edges.filter((e) => e.isValid(nids));
			
			this.canvas = new ObjectCanvas(object.canvas, this.translate.bind(this));
		}
		
		/** Checks if a data file looks valid, and if not outputs a reason
		 * 
		 * @param {object} object The object to check.
		 * @return {string} The empty string if the object is okay, and a reason if it isn't.
		 */
		check(object) {
			if(!object) return "Object is null";
			if(object.version != 1) return `Wrong version; expecting 1, but got ${object.version}`;
			if(!Array.isArray(object.nodes)) return `Node array is absent or not an array.`;
			if(!Array.isArray(object.edges)) return `Edge array is absent or not an array.`;
			if(!object.canvas) return "Canvas information is absent";
			
			return "";
		}
		
		/** Makes a brand new, "empty" node of the default type
		 * 
		 * @param {int=0} x The x coordinate at which to place the node.
		 * @param {int=0} y The y coordinate at which to place the node.
		 */
		makeNewNode(x, y) {
			let highest = 0;
			for(let x of this.nodes) {
				if(x.id >= highest) {
					highest = x.id + 1;
				}
			}
			
			let type = this.types.getDefaultNodeType();
			
			let newNode = {};
			
			newNode.id = highest;
			newNode.type = type.name;
			
			newNode.x = x ? x : 0;
			newNode.y = y ? y : 0;
			newNode.width = 100;
			
			newNode.fields = {};
			for(let f of type.fields) {
				if(f.default) {
					newNode.fields[f.name] = f.default;
				}else{
					switch(f.type) {
						case "text":
						case "blockText":
						case "url":
						case "email":
							newNode.fields[f.name] = "";
							break;
							
						case "date":
							newNode.fields[f.name] = (new Date()).toJSON();
							break
					}
				}
			}
			
			let n = new ObjectNode(newNode, type);
			this.nodes.push(n);
			return n;
		}
		
		/** Removes the node with the given id
		 * 
		 * @param {int} id The node to remove
		 */
		removeNode(id) {
			this.nodes = this.nodes.filter((n) => n.id != id);
		}
		
		/** Returns the node with the given id
		 * 
		 * @param {int} id The node to look up
		 * @return {mm.structs.ObjectNode} The node.
		 */
		getNode(id) {
			for(let n of this.nodes) {
				if(n.id == id) {return n;}
			}
		}
		
		/** Returns the edge with the given id
		 * 
		 * @param {int} id The edge to look up
		 * @return {mm.structs.ObjectEdge} The edge.
		 */
		getEdge(id) {
			for(let e of this.edges) {
				if(e.id == id) {return e;}
			}
		}
		
		/** Returns an array of the edges that link to or from this node
		 * 
		 * @param {int} id The node to get edges for
		 * @return {array<mm.structs.ObjectEdge>}
		 */
		getEdgesConnectedToNode(id) {
			return this.edges.filter((e) => [e.origin, e.dest].includes(id));
		}
		
		/** Makes a brand new, "empty" edge of the default type
		 * 
		 * @param {int} source The source of the node.
		 * @param {int} dest The destination id of the node.
		 */
		makeNewEdge(source, dest) {
			let highest = 0;
			for(let x of this.edges) {
				if(x.id >= highest) {
					highest = x.id + 1;
				}
			}
			
			let type = this.types.getDefaultArrowType();
			
			let newEdge = {};
			
			newEdge.id = highest;
			newEdge.type = type.name;
			
			newEdge.origin = source;
			newEdge.dest = dest;
			
			newEdge.points = [];
			
			newEdge.text = "";
			
			let e = new ObjectEdge(newEdge, type);
			this.edges.push(e);
			return e;
		}
		
		/** Inserts a new node into the graph
		 * 
		 * Note that a new ID will NOT be generated.
		 * 
		 * @param {object|mm.structs.ObjectNode} node The node to add. If it is an object then it will be converted
		 * to a node.
		 */
		insertNode(node) {
			if(!(node instanceof ObjectNode)) node = new ObjectNode(node, this.types.getNodeType(node.type));
			
			this.nodes.push(node);
		}
		
		/** Inserts a new edge into the graph
		 * 
		 * Note that a new ID will NOT be generated.
		 * 
		 * @param {object|mm.structs.ObjectEdge} edge The edge to add. If it is an object then it will be converted
		 * to an edge.
		 */
		insertEdge(edge) {
			if(!(edge instanceof ObjectEdge)) edge = new ObjectEdge(edge, this.types.getArrowType(edge.type));
			
			this.edges.push(edge);
		}
		
		/** Removes the edge with the given id
		 * 
		 * @param {int} id The edge to remove
		 */
		removeEdge(id) {
			this.edges = this.edges.filter((n) => n.id != id);
		}
		
		/** For every node in the diagram, moves it by (x, y). For every edge, move all its points by (x, y)
		 * 
		 * @param {int} x The x coordinate to translate.
		 * @param {int} y The y coordinate to translate.
		 */
		translate(x, y) {
			for(let n of this.nodes) {
				n.x += x;
				n.y += y;
			}
			
			for(let e of this.edges) {
				e.points = e.points.map(([px, py]) => [px + x, py + y]);
			}
		}
		
		/** Exports the whole graph to a JSON format
		 * 
		 * In the same format as the import file.
		 * @return {object} An import-like file.
		 */
		toJson() {
			return {
				version:this.version,
				nodes:this.nodes.map((x) => x.toJson()),
				edges:this.edges.map((x) => x.toJson()),
				canvas:this.canvas.toJson()
			}
		}
		
		/** Returns true if the object should be hidden
		 * 
		 * For nodes, this is it's "hidden" field.
		 * For edges, this is true if it is connected to a hidden node.
		 * 
		 * @param {mm.structs.ObjectNode|mm.structs.ObjectEdge} obj The object to check.
		 * @return {boolean} Whether the object is hidden or not.
		 */
		isHidden(obj) {
			if(obj instanceof ObjectNode) return obj.hidden;
			
			if(obj instanceof ObjectEdge) {
				return this.isHidden(this.getNode(obj.origin)) || this.isHidden(this.getNode(obj.dest));
			}
		}
	};
}));
