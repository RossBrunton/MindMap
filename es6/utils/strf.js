"use strict";

load.provide("mm.utils.strf", (function() {
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
			t = t.substring(1, t.length-1).trim();
			
			if("{}".includes(t)) return t;
			
			if(t.includes(":")) {
				let [fn, rhs] = t.split(":");
				let [varname, arg] = rhs.split(",");
				
				let f = node.getFieldType(varname);
				if(!f) return "(null)";
				let v = node.fields[varname];
				
				if(v === undefined) return "(undefined)";
				
				return _fns[fn](v, arg, f.type);
			}else{
				let f = node.getFieldType(t);
				if(!f) return "(null)";
				let v = node.fields[t];
				
				switch(f.type) {
					case "text":
					case "blocktext":
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
	
	window.strf = strf;
	return strf;
})());
