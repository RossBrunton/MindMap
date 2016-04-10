"use strict";

load.provide("mm.utils.strf", (function() {
	load.requireExternal("libs/fecha.min.js");
	
	/** An object containing all the functions used when formatting strings
	 * 
	 * @type object<string, function(string, ?string, string):string>
	 * @private
	 */
	let _fns = {
		link: (x, a, type) => {
			if(type == "url") return `<a href='${encodeURI(x)}'>${x}</a>`;
			if(type == "email") return `<a href='mailto:${encodeURI(x)}'>${x}</a>`;
			return x;
		},
		singleLine: (x) => {return x.split("\n")[0]},
		cap: (x, arg) => {return x.substring(0, arg)},
		cape: (x, arg) => {return x.length >= arg ? x.substring(0, arg-3) + "..." : x},
		dformat: (x, arg) => {
			let d = new Date(x);
			if(isNaN(d.getTime())) return "(Invalid date)";
			return fecha.format(d, arg);
		},
		cond: (x, arg, type, node) => {
			if(x.length > 0) {
				return arg;
			}
			
			return "";
		}
	};
	
	/** Formats a string, given a template and an objects node
	 * 
	 * The format is documented in docs/formatting.
	 * 
	 * @param {string} template The tamplate of the string.
	 * @param {mm.structs.ObjectNode} node The object node to format.
	 * @return {string} The formatted string.
	 */
	let strf = function(template, node) {
		return template.replace(/{(.*?)}/g, (t) => {
			t = t.substring(1, t.length-1);
			
			if("{}".includes(t)) return t;
			
			if(t.includes(":")) {
				let fn = t.split(":", 1)[0];
				let rhs = t.substring(fn.length+1);
				
				let varname = rhs.split(",", 1)[0];
				let arg = rhs.substring(varname.length + 1);
				
				let f = node.getFieldType(varname);
				if(!f) return "(null)";
				let v = node.fields[varname];
				
				if(v === undefined) return "(undefined)";
				
				return _fns[fn](v, arg, f.type, node);
			}else{
				let f = node.getFieldType(t);
				if(!f) return "(null)";
				let v = node.fields[t];
				
				switch(f.type) {
					case "text":
					case "blockText":
					case "url":
					case "email":
						return v;
						break;
						
					case "date":
						return _fns.dformat(v, "DD/MM/YY");
						break;
					
					default:
						return "(unknown type)";
				}
			}
		});
	};
	
	// Testing. TODO: Remove this
	window.strf = strf;
	return strf;
}));
