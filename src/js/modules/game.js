
let Game = {
	init() {
		this.wrapper = parabox.content.find(".game-view");
	},
	renderLevel(id) {
		let { board, size, htm } = this.paint(id);

		// insert into DOM
		this.el = this.wrapper.html(htm.join("")).find(".box.board");
		// count and store block count
		this.blockCount = this.el.find(".box[data-id]").length;

		// save clean version of map
		this.levelClean = JSON.parse(JSON.stringify(board));
		// save reference to board
		this.board = board;
		// init player object
		Player.init();
	},
	paint(id) {
		let level = typeof id === "object" ? id : Level[id],
			size = {
				h: level.walls.length,
				w: Math.max(...level.walls.map(row => row.length)),
			},
			// update board
			board = [...Array(size.h)].map(y => [...Array(size.w)].map(x => EMPTY)),
			walls = [],
			player = [],
			voids = [],
			blocks = [],
			htm = [];

		// walls
		for (let y=0, yl=level.walls.length; y<yl; y++) {
			let row = level.walls[y];
			for (let x=0, xl=row.length; x<xl; x++) {
				let cell = row[x],
					sub = cell.sub ? cell.sub.map(s => `<u class="${s}"></u>`).join("") : "";
				if (cell.key) {
					// UI element
					walls.push(`<span class="wall ${cell.key}" style="--y: ${y}; --x: ${x};">${sub}</span>`);
					// update board
					board[y][x] = "wall";
				}
			}
		}

		// player
		player.push(`<div class="box player" style="--y: ${level.player.y}; --x: ${level.player.x};"><i></i></div>`);
		// update board
		board[level.player.y][level.player.x] = PLAYER;
		
		// voids
		for (let i=0, il=level.void.length; i<il; i++) {
			let spot = level.void[i];
			voids.push(`<div class="void" style="--y: ${spot.y}; --x: ${spot.x};"></div>`);
			// update board
			board[spot.y][spot.x] = VOID;
		}

		if (level.exit) {
			// exit
			voids.push(`<div class="exit" style="--y: ${level.exit.y}; --x: ${level.exit.x};"><i></i><b></b></div>`);
			// update board
			board[level.exit.y][level.exit.x] = EXIT;
		}

		// blocks
		for (let i=0, il=level.block.length; i<il; i++) {
			let block = level.block[i],
				color = block.color,
				sub = [];
			if (block.mini) {
				color = "mini";
				// temp
				sub.push(`<span class="wall NE" style="--y: 0; --x: 0;"></span>`);
				sub.push(`<span class="wall NS" style="--y: 0; --x: 1;"></span>`);
				sub.push(`<span class="wall NS" style="--y: 0; --x: 2;"></span>`);
				sub.push(`<span class="wall NS" style="--y: 0; --x: 3;"></span>`);
				sub.push(`<span class="wall NW" style="--y: 0; --x: 4;"></span>`);

				sub.push(`<span class="wall WE" style="--y: 1; --x: 0;"></span>`);
				sub.push(`<span class="wall WE" style="--y: 1; --x: 4;"></span>`);

				sub.push(`<span class="wall WE" style="--y: 2; --x: 0;"></span>`);
				sub.push(`<span class="wall WE" style="--y: 2; --x: 4;"></span>`);

				sub.push(`<span class="wall WE" style="--y: 3; --x: 0;"></span>`);
				sub.push(`<span class="wall WE" style="--y: 3; --x: 4;"></span>`);

				sub.push(`<span class="wall SE" style="--y: 4; --x: 0;"></span>`);
				sub.push(`<span class="wall NS" style="--y: 4; --x: 1;"></span>`);
				sub.push(`<span class="wall NS" style="--y: 4; --x: 2;"></span>`);
				sub.push(`<span class="wall NS" style="--y: 4; --x: 3;"></span>`);
				sub.push(`<span class="wall WS" style="--y: 4; --x: 4;"></span>`);
			}
			blocks.push(`<div class="box ${color}" data-id="${block.y}-${block.x}" style="--y: ${block.y}; --x: ${block.x};">${sub.join("")}</div>`);
			// update board
			board[block.y][block.x] = BLOCK;
		}

		// level wrapper: START
		htm.push(`<div class="box board size-${size.w}" style="--bg-color: ${level.bg}; --fg-filter: ${level.filter}; --w: ${size.w}; --h: ${size.h};">`);
		htm.push(walls.join(""));
		htm.push(player.join(""));
		htm.push(voids.join(""));
		htm.push(blocks.join(""));
		htm.push(`</div>`);

		return { id, board, size, walls, player, voids, blocks, htm };
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

		// Don"t move if the movement pushes a box into a wall
		if (Utils.isWall(this.board[blockY][blockX])) return;

		// Count how many blocks are in a row
		let blocksInARow = 0;
		if (Utils.isBlock(this.board[blockY][blockX])) {
			blocksInARow = Utils.countBlocks(1, blockY, blockX, direction, this.board);
			// See what the next block is
			let bY = Utils.getY(playerY, direction, blocksInARow),
				bX = Utils.getX(playerX, direction, blocksInARow);
			// Push all the blocks if you can
			if (Utils.isTraversible(this.board[bY][bX])) {
				while (blocksInARow--) {
					let oY = Utils.getY(blockY, direction, blocksInARow),
						oX = Utils.getX(blockX, direction, blocksInARow),
						result = Utils.isVoid(this.levelClean[oY][oX]) ? SUCCESS : BLOCK;
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
			let result = Utils.isVoid(this.levelClean[blockY][blockX]) ? SUCCESS : BLOCK;
			this.board[blockY][blockX] = result;
			this.moveBlockEl([playerY, playerX], [blockY, blockX]);
			this.movePlayer(playerCoords, direction);
		}
	},
	moveBlockEl(from, to) {
		let bEl = this.el.find(`.box[data-id="${from[0]}-${from[1]}"]`),
			style = `--y: ${to[0]}; --x: ${to[1]};`,
			id = `${to[0]}-${to[1]}`;
		bEl.attr({ style }).data({ id });
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
		// check if level is cleared
		this.checkWin();
	},
	checkWin() {
		let exitEl = this.el.find(".exit");
		if (!exitEl.length) return;

		let exitY = +exitEl.cssProp("--y"),
			exitX = +exitEl.cssProp("--x");
		
		// signals exit is open
		let voidCount = this.board.filter(row => row.some(cell => cell === VOID))
							.reduce((acc, row) => acc + row.filter(c => c === VOID).length, 0);
		if (voidCount === 0) this.el.find(".exit").addClass("ready");

		// return if player is not on exit square
		if (!Player.pos.isOn(exitX, exitY)) return;

		// The player herself might be standing on an initially void cell:
		let rowsWithVoid = this.board.filter(row => row.some(cell => cell === VOID));
		if (Utils.isVoid(this.levelClean[Player.pos.y][Player.pos.x])) {
			rowsWithVoid.push(this.levelClean[Player.pos.y]);
		}

		// check if level is complete
		let rowsWithSuccess = this.board.filter(row => row.some(cell => cell === SUCCESS));
		if (rowsWithVoid.length === 0 && rowsWithSuccess.length === this.blockCount) {
			setTimeout(() => parabox.content.addClass("game-won"), 500);
		}
	}
};
