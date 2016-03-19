"use strict";

load.provide("mm.interactions.Resize", (function() {
	let Interaction = load.require("mm.interactions.Interaction");
	let Editor = load.require("mm.Editor");
	
	let _resizeUndo = (event, call) => {
		Editor.registerUndo(`resize_${event}`, function(type, arg, graph) {
			graph.objects.canvas[`add${call}`](-arg.val);
		}, function(type, arg, graph) {
			graph.objects.canvas[`add${call}`](arg.val);
		});
	};
	
	_resizeUndo("top", "Top");
	_resizeUndo("bottom", "Bottom");
	_resizeUndo("left", "Left");
	_resizeUndo("right", "Right");
	
	return class Resize extends Interaction {
		async addCanvas(renderer, html) {
			let top = -1;
			let left = -1;
			let inner = $(html).find(".mm-inner")[0];
			let svg = $(html).find("svg");
			
			if(this._editor) html.addEventListener("mousemove", function(e) {
				if(top == inner.scrollTop && left == inner.scrollLeft) return;
				
				top = inner.scrollTop;
				left = inner.scrollLeft;
				
				// Update locations of blocks
				if(top <= 10) {
					$(html).find(".mm-resize-top").show();
				}else{
					$(html).find(".mm-resize-top").hide();
				}
				
				if(left <= 10) {
					$(html).find(".mm-resize-left").show();
				}else{
					$(html).find(".mm-resize-left").hide();
				}
				
				let margin = +svg.css("margin").split("px")[0] * 2;
				if(top + 10 >= svg.height() - html.scrollHeight + margin) {
					$(html).find(".mm-resize-bottom").show();
				}else{
					$(html).find(".mm-resize-bottom").hide();
				}
				
				if(left + 10 >= svg.width() - html.scrollWidth + margin) {
					$(html).find(".mm-resize-right").show();
				}else{
					$(html).find(".mm-resize-right").hide();
				}
			});
			
			// Resize buttons
			$(html).find(".mm-resize-top .mm-extend").on("click", (e) => {
				this._abstractGraph.objects.canvas.addTop(50);
				this._interactor.rerender();
				this._editor.addToUndoStack("resize_top", {val:50});
			});
			$(html).find(".mm-resize-top .mm-shrink").on("click", (e) => {
				this._abstractGraph.objects.canvas.addTop(-50);
				this._interactor.rerender();
				this._editor.addToUndoStack("resize_top", {val:-50});
			});
			
			$(html).find(".mm-resize-left .mm-extend").on("click", (e) => {
				this._abstractGraph.objects.canvas.addLeft(50);
				this._interactor.rerender();
				this._editor.addToUndoStack("resize_left", {val:50});
			});
			$(html).find(".mm-resize-left .mm-shrink").on("click", (e) => {
				this._abstractGraph.objects.canvas.addLeft(-50);
				this._interactor.rerender();
				this._editor.addToUndoStack("resize_left", {val:-50});
			});
			
			$(html).find(".mm-resize-right .mm-extend").on("click", (e) => {
				this._abstractGraph.objects.canvas.addRight(50);
				this._interactor.rerender();
				this._editor.addToUndoStack("resize_right", {val:50});
				inner.scrollLeft += 50;
			});
			$(html).find(".mm-resize-right .mm-shrink").on("click", (e) => {
				this._abstractGraph.objects.canvas.addRight(-50);
				this._interactor.rerender();
				this._editor.addToUndoStack("resize_right", {val:-50});
			});
			
			$(html).find(".mm-resize-bottom .mm-extend").on("click", (e) => {
				this._abstractGraph.objects.canvas.addBottom(50);
				this._interactor.rerender();
				this._editor.addToUndoStack("resize_bottom", {val:50});
				inner.scrollTop += 50;
			});
			$(html).find(".mm-resize-bottom .mm-shrink").on("click", (e) => {
				this._abstractGraph.objects.canvas.addBottom(-50);
				this._interactor.rerender();
				this._editor.addToUndoStack("resize_bottom", {val:-50});
			});
		}
	};
}));
