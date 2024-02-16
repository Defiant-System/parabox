
// parabox.editor

{
	init() {
		// fast references
		this.els = {
			doc: $(document),
			el: window.find(`.editor-view[data-area="editor"]`),
		};
		// bind event handlers
		this.els.el.on("mousedown", this.paintWall);
	},
	dispatch(event) {
		let APP = parabox,
			Self = APP.editor,
			data,
			el;
		// console.log(event);
		switch (event.type) {
			case "init-mode":
				data = Game.paint(1);
				console.log(data);
				break;
			case "exit-mode":
				break;
		}
	},
	paintWall(event) {
		let APP = parabox,
			Self = APP.editor,
			Drag = Self.drag;
		// console.log(opt);
		switch (event.type) {
			// native events
			case "mousedown":
				// prevent default behaviour
				event.preventDefault();

				let el = $(event.target),
					bEl = el.parents("?.box.board"),
					type = el.hasClass("wall") ? "subtract" : "add",
					click = {
						x: event.clientX,
						y: event.clientY,
					},
					offset = {
						x: event.offsetX,
						y: event.offsetY,
					};

				// return console.log(event);
				Self.drag = { bEl, type, click, offset };

				// cover content
				APP.content.addClass("cover");
				// bind event handlers
				Self.els.doc.on("mousemove mouseup", Self.paintWall);
				break;
			case "mousemove":

				break;
			case "mouseup":
				// cover content
				APP.content.removeClass("cover");
				// bind event handlers
				Self.els.doc.off("mousemove mouseup", Self.paintWall);
				break;
		}
	}
}
