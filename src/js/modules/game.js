
let Game = {
	init() {
		// fast references
		let APP = parabox;
		this.els = {
			view: APP.content.find(".game-view"),
			topLevel: APP.content.find(".game-view .top-level"),
		};
	},
	renderLevel(id) {
		let { board, size, htm, level } = this.paint(id);

		// insert into DOM
		this.el = this.els.topLevel.html(htm.join("")).find(".box.board");
		// count and store block count
		this.blockCount = this.el.find(".box[data-id]").length;

		// save clean version of map
		this.levelClean = JSON.parse(JSON.stringify(board));
		// save reference to board
		this.board = board;
		// init player object
		if (level.player) Player.init();
	},
	paint(id, extend={}) {
		let level = typeof id === "object" ? { data: id, ...extend } : Level.get(id, extend),
			// update board
			player = [],
			voids = [],
			blocks = [],
			htm = [];

		// save reference to active level object
		this.level = level.data;
		// start rendering; walls
		let { walls, board, size, corners } = this.draw("walls", level.data.walls);
		// player
		if (level.data.player) player = this.draw("player", level.data, board);
		// voids
		if (level.data.void) voids = this.draw("voids", level.data, board);
		// exit
		if (level.data.exit) voids.push(this.draw("exit", level.data, board));

		// blocks
		if (level.data.block) {
			for (let i=0, il=level.data.block.length; i<il; i++) {
				let block = level.data.block[i],
					style = `--y: ${block.y}; --x: ${block.x};`,
					color = block.color,
					sub = [];
				if (block.mini) {
					let mini = Level.get(block.mini),
						data = this.draw("walls", mini.data.walls);
					// mini maps walls
					sub = [...data.walls];
					// paint void + exit on mini maps
					if (mini.data.void) sub.push(...this.draw("voids", mini.data, data.board));
					if (mini.data.exit) sub.push(...this.draw("exit", mini.data, data.board));

					color = `mini size-${data.size.w}`;
					style += `--color: ${mini.data.bg}; --fg-filter: ${mini.data.filter};`;
				}
				blocks.push(`<div class="box ${color}" data-mini="${block.mini}" data-id="${block.y}-${block.x}" style="${style}">${sub.join("")}</div>`);
				// update board
				board[block.y][block.x] = block.mini ? MINI : BLOCK;
			}
		}

		// level wrapper: START
		let grid = level.grid || level.data.grid;
		if (extend.zoom) grid = level.data.grid;

		htm.push(`<div class="box board grid-${grid} ${corners.join(" ")}" data-level-id="${id}" style="--bg-color: ${level.data.bg}; --fg-filter: ${level.data.filter}; --w: ${size.w}; --h: ${size.h};">`);
		htm.push(`<div class="floor-tiles"></div>`);
		htm.push(walls.join(""));
		if (voids.length) htm.push(voids.join(""));
		if (blocks.length) htm.push(blocks.join(""));
		if (player.length) htm.push(player.join(""));
		htm.push(`</div>`);

		return { id, level: level.data, board, size, walls, player, voids, blocks, htm };
	},
	draw(what, data, levelBoard) {
		let result = [];
		switch (what) {
			case "player":
				result.push(`<div class="box player" style="--y: ${data.player.y}; --x: ${data.player.x};"><i></i></div>`);
				// update board
				levelBoard[data.player.y][data.player.x] = PLAYER;
				// return html
				return result;
			case "voids":
				for (let i=0, il=data.void.length; i<il; i++) {
					let spot = data.void[i];
					result.push(`<div class="void" style="--y: ${spot.y}; --x: ${spot.x};"></div>`);
					// update board
					levelBoard[spot.y][spot.x] = VOID;
				}
				// return html
				return result;
			case "exit":
				result.push(`<div class="exit" style="--y: ${data.exit.y}; --x: ${data.exit.x};"><i></i><b></b></div>`);
				// update board
				levelBoard[data.exit.y][data.exit.x] = EXIT;
				// return html
				return result;
			case "walls":
				let size = {
						h: data.length,
						w: Math.max(...data.map(row => row.length)),
					},
					board = [...Array(size.h)].map(y => [...Array(size.w)].map(x => EMPTY)),
					walls = [],
					corners = [];
				// walls
				for (let y=0, yl=data.length; y<yl; y++) {
					let row = data[y];
					for (let x=0, xl=row.length; x<xl; x++) {
						let cell = row[x],
							sub = cell.sub ? cell.sub.map(s => `<u class="${s}"></u>`).join("") : "";
						if (y === 0 && x === 0 && cell.key === "B") corners.push("tlb");
						if (y === 0 && x === xl-1 && cell.key === "B") corners.push("trb");
						if (cell.key) {
							// UI element
							walls.push(`<span class="wall ${cell.key}" style="--y: ${y}; --x: ${x};">${sub}</span>`);
							// update board
							board[y][x] = "wall";
						}
					}
				}
				return { walls, board, size, corners };
		}
	},
	movePlayer(playerCoords, direction) {
		// Replace previous spot with initial board state (void or empty)
		this.board[playerCoords.y][playerCoords.x] =
			Utils.isVoid(this.levelClean[playerCoords.y][playerCoords.x]) ? VOID : EMPTY;
		// Move player
		Player.move(direction);
		// update board
		this.board[Player.pos.y][Player.pos.x] = PLAYER;
	},
	movePlayerAndBoxes(playerCoords, direction) {
		let playerY = Utils.getY(playerCoords.y, direction, 1);
		let playerX = Utils.getX(playerCoords.x, direction, 1);
		let blockY = Utils.getY(playerCoords.y, direction, 2);
		let blockX = Utils.getX(playerCoords.x, direction, 2);
		let cell = this.board[blockY][blockX];

		// Don't move if the movement pushes a box into a wall
		if (Utils.isWall(cell)) {
			if (this.board[playerY][playerX] === MINI) this.enterMinimap({ y: playerY, x: playerX }, direction);
			return;
		}

		// Count how many blocks are in a row
		let blocksInARow = 0;
		if (Utils.isBlock(cell)) {
			blocksInARow = Utils.countBlocks(1, blockY, blockX, direction, this.board);
			// See what the next block is
			let bY = Utils.getY(playerY, direction, blocksInARow),
				bX = Utils.getX(playerX, direction, blocksInARow);
			// Push all the blocks if you can
			if (Utils.isTraversible(this.board[bY][bX])) {
				while (blocksInARow--) {
					let oY = Utils.getY(blockY, direction, blocksInARow),
						oX = Utils.getX(blockX, direction, blocksInARow),
						result = Utils.isVoid(this.levelClean[oY][oX]) ? SUCCESS : this.board[playerY][playerX];
					this.board[oY][oX] = result;
					// move DOM element
					let nY = Utils.getY(playerY, direction, blocksInARow),
						nX = Utils.getX(playerX, direction, blocksInARow);
					this.moveBlockEl([nY, nX], [oY, oX]);
				}
				this.movePlayer(playerCoords, direction);
			}
		} else {
			// Move box; if on top of void, make into a success box
			let result = Utils.isVoid(this.levelClean[blockY][blockX]) ? SUCCESS : this.board[playerY][playerX];
			this.board[blockY][blockX] = result;
			this.moveBlockEl([playerY, playerX], [blockY, blockX]);
			this.movePlayer(playerCoords, direction);
		}
	},
	enterMinimap(coords, enter) {
		let { x, y } = coords,
			mEl = this.el.find(`.box[data-id="${y}-${x}"]`),
			mini = mEl.data("mini");
		Anim.zoomGrid({ x, y, enter, mini });
	},
	moveBlockEl(from, to) {
		let bEl = this.el.find(`.box[data-id="${from[0]}-${from[1]}"]`),
			style = { "--y": to[0], "--x": to[1] },
			id = `${to[0]}-${to[1]}`;
		bEl.css(style).data({ id })
			.cssSequence("moving", "transitionend", el => el.removeClass("moving"));
	},
	move(direction) {
		let playerCoords = Player.coords();
		let { x, y, above, below, sideLeft, sideRight } = playerCoords;
		let adjacentCell = {
				[directions.up]: above,
				[directions.down]: below,
				[directions.left]: sideLeft,
				[directions.right]: sideRight,
			};

		if (Utils.isTraversible(adjacentCell[direction])) {
			this.movePlayer(playerCoords, direction);
		}
		if (Utils.isBlock(adjacentCell[direction])) {
			this.movePlayerAndBoxes(playerCoords, direction);
		}
		if (Utils.isOff(adjacentCell[direction])) {
			Anim.zoomOut();
		}
		// check if level is cleared
		this.checkWin();
	},
	checkWin() {
		let exitEl = this.el.find(".exit");
		if (!exitEl.length) return;

		let exitY = +exitEl.cssProp("--y"),
			exitX = +exitEl.cssProp("--x");
		
		// signals exit is open
		let successCount = this.board.filter(row => row.some(cell => cell === SUCCESS))
								.reduce((acc, row) => acc + row.filter(c => c === SUCCESS).length, 0);
		let voidCount = this.board.filter(row => row.some(cell => cell === VOID))
							.reduce((acc, row) => acc + row.filter(c => c === VOID).length, 0);
		if (voidCount === 0 && successCount === this.blockCount) {
			setTimeout(() => this.el.find(".exit").addClass("ready"), 500);
		}
		// return if player is not on exit square
		if (!Player.pos.isOn(exitX, exitY)) return;

		// The player herself might be standing on an initially void cell:
		let rowsWithVoid = this.board.filter(row => row.some(cell => cell === VOID));
		if (Utils.isVoid(this.levelClean[Player.pos.y][Player.pos.x])) {
			rowsWithVoid.push(this.levelClean[Player.pos.y]);
		}

		// check if level is complete
		if (successCount === this.blockCount) {
			setTimeout(() => parabox.content.addClass("game-won"), 500);
		}
	}
};
