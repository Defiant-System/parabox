
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
			result,
			name,
			value,
			el;
		// console.log(event);
		switch (event.type) {
			case "init-mode":
			case "paint-board":
				Self.data = Self.dispatch({ type: "generate-board", size: event.size || 5 });
				result = Game.paint(Self.data);
				
				// extract only walls
				value = [result.htm[0]];
				value.push(...result.walls);
				value.push(result.htm[result.htm.length-1]);

				// insert into DOM
				Self.els.el.html(value.join(""));
				break;
			case "exit-mode":
				// insert into DOM
				Self.els.el.html("");
				break;

			case "generate-board":
				data = {
					bg: "#666",
					filter: "none",
					player: { y: 1, x: 1 },
					exit: { y: 1, x: 3 },
					void: [{ y: 1, x: 4 }],
					block: [{ y: 3, x: 2, color: "yellow" }],
					walls: [...Array(event.size)].map(y => [...Array(event.size)].map(x => ({}))),
				};

				data.walls[0][0] = { key: "NSE" };
				data.walls[0][1] = { key: "NWS" };

				return data;
		}
	},
	getCell(y, x) {
		let board = this.data,
			cell = board[y, x],
			N: board[y-1][x],
			S: board[y+1][x],
			E: board[y][x-1],
			W: board[y][x+1],
			NW: board[y-1][x+1],
			NE: board[y-1][x-1],
			SW: board[y+1][x+1],
			SE: board[y+1][x-1];
		return { cell, N, S, E, W, NW, NE, SW, SE };
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
