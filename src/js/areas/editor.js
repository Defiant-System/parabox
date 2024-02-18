
// parabox.editor

{
	init() {
		// fast references
		this.els = {
			doc: $(document),
			el: window.find(`.editor-view[data-area="editor"]`),
		};
		// bind event handlers
		this.els.el.on("mousedown mousemove", ".board", this.paintWall);
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
				Self.els.board = Self.els.el.html(value.join("")).find(`> .box.board`);
				// get cell size in pixels
				Self.data.px = parseInt(Self.els.board.cssProp("--size"), 10);
				Self.data.board = result.board;

				// console.log( Self.data );

				// insert ghost element
				Self.els.ghost = Self.els.board.append(`<span class="wall ghost" style="--y: -1; --x: -1;"></span>`);
				break;
			case "exit-mode":
				// insert into DOM
				Self.els.el.html("");
				break;

			case "generate-board":
				data = {
					bg: "#666",
					filter: "none",
					size: event.size - 1,
					player: { y: 1, x: 1 },
					exit: { y: 1, x: 3 },
					void: [{ y: 1, x: 4 }],
					block: [{ y: 3, x: 2, color: "yellow" }],
					walls: [...Array(event.size)].map(y => [...Array(event.size)].map(x => ({}))),
				};

				data.walls[0][0] = { key: "NWSE" };
				data.walls[0][1] = { key: "NWSE" };
				data.walls[0][2] = { key: "NWSE" };
				data.walls[0][3] = { key: "NWSE" };
				data.walls[0][4] = { key: "NWSE" };

				// data.walls[1][0] = { key: "NWSE" };
				// data.walls[1][1] = { key: "NWSE" };
				data.walls[1][2] = { key: "NWSE" };
				data.walls[1][3] = { key: "W" };
				// data.walls[1][4] = { key: "NWSE" };

				// data.walls[2][0] = { key: "NWSE" };
				// data.walls[2][1] = { key: "NWSE" };
				data.walls[2][2] = { key: "NWSE" };
				data.walls[2][3] = { key: "NWSE", sub: ["NE-ES"] };
				data.walls[2][4] = { key: "NWSE" };

				// data.walls[3][0] = { key: "NWSE" };
				// data.walls[3][1] = { key: "NWSE" };
				// data.walls[3][2] = { key: "NWSE" };
				// data.walls[3][3] = { key: "NWSE" };
				// data.walls[3][4] = { key: "NWSE" };

				// data.walls[4][0] = { key: "NWSE" };
				// data.walls[4][1] = { key: "NWSE" };
				// data.walls[4][2] = { key: "NWSE" };
				// data.walls[4][3] = { key: "NWSE" };
				// data.walls[4][4] = { key: "NWSE" };

				Self.fixNegativeBorders(data.walls);

				return data;
		}
	},
	fixNegativeBorders(walls) {
		let addSub = (hold, corner) => {
				if (!hold.sub) hold.sub = [];
				if (!hold.sub.includes(corner)) hold.sub.push(corner);
			},
			delSub = (hold, corner) => {
				let index = hold.sub.indexOf(corner);
				if (index > -1) hold.sub.splice(index, 1);
			};

		for (let y=0, yl=walls.length; y<yl; y++) {
			let row = walls[y];
			for (let x=0, xl=row.length; x<xl; x++) {
				let cell = this.getCell(y, x, walls);
				
				if (cell.hold.key) {
					if (cell.N && !!cell.N.key) cell.borders[0] = "";
					if (cell.W && !!cell.W.key) cell.borders[1] = "";
					if (cell.S && !!cell.S.key) cell.borders[2] = "";
					if (cell.E && !!cell.E.key) cell.borders[3] = "";
					if (cell.N && !!cell.N.key && cell.W && !!cell.W.key &&
						cell.S && !!cell.S.key && cell.E && !!cell.E.key) {
						cell.borders[4] = ["F"];
					}
					if (cell.NE && !!cell.NE.key && !cell.E.key) addSub(cell.hold, "NE-NW");
					if (cell.NW && !!cell.NW.key && !cell.W.key) addSub(cell.hold, "NW-NE");
					if (cell.N && !!cell.N.key && cell.E && !!cell.E.key && !cell.NE.key) addSub(cell.hold, "NE-WS");
					if (cell.NE && !!cell.NE.key && cell.E && !!cell.E.key && !cell.N.key) addSub(cell.hold, "NE-ES");

					if (!!cell.hold.sub) {
						if (cell.NW && !!cell.NW.key && cell.W && !!cell.W.key) delSub(cell.hold, "NW-NE");
						if (cell.NE && !!cell.NE.key && cell.E && !!cell.E.key) delSub(cell.hold, "NE-NW");
						if ((cell.NE && !cell.NE.key) || (cell.N && !cell.N.key))  delSub(cell.hold, "NE-NW");
						if ((cell.NW && !cell.NW.key) || (cell.N && !cell.N.key))  delSub(cell.hold, "NW-NE");
						
						if (!cell.hold.sub.length) delete cell.hold.sub;
					}

					if (y === 1 && x === 2) console.log(cell);
					cell.hold.key = cell.borders.join("");
				}
			}
		}
	},
	getCell(y, x, data) {
		let board = data || this.data,
			template = "NWSE".split(""),
			hold = board[y][x],
			borders = [];
		
		if (hold.key) {
			hold.key.split("").map(e => borders[template.indexOf(e)] = e);
		}

		return {
			hold,
			borders,
			N: board[y-1] ? board[y-1][x] : undefined,
			S: board[y+1] ? board[y+1][x] : undefined,
			E: board[y][x-1] || undefined,
			W: board[y][x+1] || undefined,
			NW: board[y-1] ? board[y-1][x+1] : undefined,
			NE: board[y-1] ? board[y-1][x-1] : undefined,
			SW: board[y+1] ? board[y+1][x+1] : undefined,
			SE: board[y+1] ? board[y+1][x-1] : undefined,
		};
	},
	paintWall(event) {
		let APP = parabox,
			Self = APP.editor,
			Drag = Self.drag || {};
		// console.log(opt);
		switch (event.type) {
			// native events
			case "mousedown":
				// prevent default behaviour
				event.preventDefault();

				let el = $(event.target),
					bEl = el.parents("?.box.board"),
					tip = el.hasClass("wall") ? EMPTY : WALL,
					snapshot = Self.data.board.map(row => [...row]),
					offset = {
						x: event.offsetX - event.clientX,
						y: event.offsetY - event.clientY,
					};

				// return console.log(event);
				Self.drag = { bEl, tip, offset, snapshot };

				// cover content
				APP.content.addClass("cover");
				// bind event handlers
				Self.els.doc.on("mousemove mouseup", Self.paintWall);
				break;
			case "mousemove":
				if (Drag.snapshot) {
					let y = Math.min(((Drag.offset.y + event.clientY) / Self.data.px) | 0, Self.data.size),
						x = Math.min(((Drag.offset.x + event.clientX) / Self.data.px) | 0, Self.data.size);

					// compare old state with new state
					let oldState = JSON.stringify(Drag.snapshot);
					Drag.snapshot[y][x] = Drag.tip;
					let newState = JSON.stringify(Drag.snapshot);

					if (oldState !== newState) {
						Self.data.walls[y][x] = { key: "NWSE" };
						Self.fixNegativeBorders(Self.data.walls);

						// clear old walls
						Self.els.board.find(".wall").remove();

						// // refresh DOM
						let { walls } = Game.paintWalls(Self.data.walls);

						Self.els.board.prepend(walls.join(""));
						console.log("refreshed DOM");
					}
				} else {
					let y = Math.min((event.offsetY / Self.data.px) | 0, Self.data.size),
						x = Math.min((event.offsetX / Self.data.px) | 0, Self.data.size),
						cell = Self.data.walls[y][x];
					if (cell.key) y = -1; // hovering wall
					Self.els.ghost.css({ "--y": y, "--x": x });
				}
				break;
			case "mouseup":
				// reset drag object
				delete Drag.snapshot;
				// cover content
				APP.content.removeClass("cover");
				// bind event handlers
				Self.els.doc.off("mousemove mouseup", Self.paintWall);
				break;
		}
	}
}
