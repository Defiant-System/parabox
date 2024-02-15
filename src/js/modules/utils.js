
// constans
let EMPTY = "empty",
	WALL = "wall",
	VOID = "void",
	EXIT = "exit",
	BLOCK = "block",
	SUCCESS = "success",
	PLAYER = "player";

let directions = {
		up: "up",
		down: "down",
		left: "left",
		right: "right",
	};



let Utils = {
	isBlock(cell) {
		return [BLOCK, SUCCESS].includes(cell);
	},
	isPlayer(cell) {
		return [PLAYER].includes(cell);
	},
	isTraversible(cell) {
		return [EMPTY, VOID].includes(cell);
	},
	isWall(cell) {
		return [WALL].includes(cell);
	},
	isVoid(cell) {
		return [VOID, SUCCESS].includes(cell);
	},
	getX(x, direction, spaces = 1) {
		if (direction === "up" || direction === "down") return x;
		if (direction === "right") return x + spaces;
		if (direction === "left") return x - spaces;
	},
	getY(y, direction, spaces = 1) {
		if (direction === "left" || direction === "right") return y;
		if (direction === "down") return y + spaces;
		if (direction === "up") return y - spaces;
	},
	countBlocks(blockCount, y, x, direction, board) {
		if (this.isBlock(board[y][x])) {
			blockCount++;
			return this.countBlocks(blockCount, this.getY(y, direction), this.getX(x, direction), direction, board);
		} else {
			return blockCount;
		}
	}
};
