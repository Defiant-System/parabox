
let Game = {
	init() {
		this.wrapper = parabox.content.find(".game-view");
	},
	renderLevel(i) {
		let level = Level[i],
			size = {
				h: level.walls.length,
				w: Math.max(...level.walls.map(row => row.length)),
			},
			// update board
			board = [...Array(size.h)].map(y => [...Array(size.w)].map(x => EMPTY)),
			htm = [];

		// level wrapper: START
		htm.push(`<div class="box board size-${size.w}" style="--bg-color: ${level.bg}; --fg-filter: ${level.filter}; --w: ${size.w}; --h: ${size.h};">`);
		
		// walls
		for (let y=0, yl=level.walls.length; y<yl; y++) {
			let row = level.walls[y];
			for (let x=0, xl=row.length; x<xl; x++) {
				let cell = row[x],
					sub = cell.sub ? cell.sub.map(s => `<u class="${s}"></u>`).join("") : "";
				if (cell.key) {
					// UI element
					htm.push(`<span class="wall ${cell.key}" style="--y: ${y}; --x: ${x};">${sub}</span>`);
					// update board
					board[y][x] = "wall";
				}
			}
		}

		// player
		htm.push(`<div class="box player" style="--y: ${level.player.y}; --x: ${level.player.x};"><i></i></div>`);
		// update board
		board[level.player.y][level.player.x] = PLAYER;
		
		// voids
		for (let i=0, il=level.void.length; i<il; i++) {
			let spot = level.void[i];
			htm.push(`<div class="void" style="--y: ${spot.y}; --x: ${spot.x};"></div>`);
			// update board
			board[spot.y][spot.x] = VOID;
		}

		// exit
		htm.push(`<div class="exit" style="--y: ${level.exit.y}; --x: ${level.exit.x};"><i></i><b></b></div>`);
		// update board
		board[level.exit.y][level.exit.x] = EXIT;

		// blocks
		for (let i=0, il=level.block.length; i<il; i++) {
			let block = level.block[i];
			htm.push(`<div class="box ${block.color}" data-id="${block.y}-${block.x}" style="--y: ${block.y}; --x: ${block.x};"></div>`);
			// update board
			board[block.y][block.x] = BLOCK;
		}
		// level wrapper: END
		htm.push(`</div>`)
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
		let newPlayerY = Utils.getY(playerCoords.y, direction, 1);
		let newPlayerX = Utils.getX(playerCoords.x, direction, 1);
		let newBoxY = Utils.getY(playerCoords.y, direction, 2);
		let newBoxX = Utils.getX(playerCoords.x, direction, 2);

		// Don"t move if the movement pushes a box into a wall
		if (Utils.isWall(this.board[newBoxY][newBoxX])) return;

		// Count how many blocks are in a row
		let blocksInARow = 0;
		if (Utils.isBlock(this.board[newBoxY][newBoxX])) {
			blocksInARow = Utils.countBlocks(1, newBoxY, newBoxX, direction, this.board);
			// See what the next block is
			let nextBlock = this.board
						[Utils.getY(newPlayerY, direction, blocksInARow)]
						[Utils.getX(newPlayerX, direction, blocksInARow)];
			// Push all the blocks if you can
			if (Utils.isTraversible(nextBlock)) {
				for (let i=0; i<blocksInARow; i++) {
					// Add blocks
					let rY = Utils.getY(newBoxY, direction, i),
						rX = Utils.getX(newBoxX, direction, i),
						result = Utils.isVoid(this.levelClean[rY][rX]) ? SUCCESS : BLOCK;
					this.board[Utils.getY(newBoxY, direction, i)][Utils.getX(newBoxX, direction, i)] = result;
				}
				this.movePlayer(playerCoords, direction);
			}
		} else {
			// Move box; if on top of void, make into a success box
			let result = Utils.isVoid(this.levelClean[newBoxY][newBoxX]) ? SUCCESS : BLOCK;
			this.board[newBoxY][newBoxX] = result;

			let bEl = this.el.find(`.box[data-id="${newPlayerY}-${newPlayerX}"]`),
				style = `--y: ${newBoxY}; --x: ${newBoxX};`,
				id = `${newBoxY}-${newBoxX}`;
			bEl.attr({ style }).data({ id });

			this.movePlayer(playerCoords, direction);
		}
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
		let exitEl = this.el.find(".exit"),
			exitY = +exitEl.cssProp("--y"),
			exitX = +exitEl.cssProp("--x");
		// count placed blocks
		let rowsWithSuccess = this.board.filter(row => row.some(cell => cell === SUCCESS));
		// signals exit is open
		if (rowsWithSuccess.length === this.blockCount) this.el.find(".exit").addClass("ready");

		// return if player is not on exit square
		if (!Player.pos.isOn(exitX, exitY)) return;

		// The player herself might be standing on an initially void cell:
		let rowsWithVoid = this.board.filter(row => row.some(cell => cell === VOID));
		if (Utils.isVoid(this.levelClean[Player.pos.y][Player.pos.x])) {
			rowsWithVoid.push(this.levelClean[Player.pos.y]);
		}

		// check if level is complete
		if (rowsWithVoid.length === 0 && rowsWithSuccess.length === this.blockCount) {
			setTimeout(() => parabox.content.addClass("game-won"), 500);
		}
	}
};
