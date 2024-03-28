
// constans
let OFF = "off",
	EMPTY = "empty",
	WALL = "wall",
	VOID = "void",
	EXIT = "exit",
	BLOCK = "block",
	SUCCESS = "success",
	MINI = "mini",
	PLAYER = "player";

let directions = {
		up: "up",
		down: "down",
		left: "left",
		right: "right",
	};



let Utils = {
	isBlock(cell) {
		return [MINI, BLOCK, SUCCESS].includes(cell);
	},
	isPlayer(cell) {
		return [PLAYER].includes(cell);
	},
	isTraversible(cell) {
		return [EMPTY, VOID, EXIT].includes(cell);
	},
	isWall(cell) {
		return [WALL].includes(cell);
	},
	isVoid(cell) {
		return [VOID, SUCCESS].includes(cell);
	},
	isMini(cell) {
		return [MINI].includes(cell);
	},
	isOff(cell) {
		return [OFF].includes(cell);
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
	countBlocks(acc, y, x, direction, board) {
		let cell = board[y][x];
		if (this.isBlock(cell)) {
			acc.blocks.push(cell);
			acc.blocksInARow++;
			return this.countBlocks(acc, this.getY(y, direction), this.getX(x, direction), direction, board);
		} else {
			return acc;
		}
	}
};
