
let Player = {
	init() {
		this.el = window.find(".game-view .box.player");
		
		// player position
		let x = +this.el.cssProp("--x"),
			y = +this.el.cssProp("--y");
		this.pos = new Point(x, y);

		// game started - push initial state
		History.dispatch({ type: "history-push-state" });
	},
	transport(zoomLevel, board) {
		let zPlayer = zoomLevel.find(".player"),
			x = +zPlayer.cssProp("--x"),
			y = +zPlayer.cssProp("--y"),
			pos = new Point(x, y);

		this.el = zPlayer;
		this.pos = pos;

		board[y][x] = PLAYER;

		Game.board = board;
	},
	move(dir) {
		let name = `go-${dir}`,
			vec = {
				up:    [0, -1],
				left:  [-1, 0],
				down:  [0,  1],
				right: [1,  0],
			};
		this.pos.add(vec[dir]);

		this.el
			.css(this.pos.serialize())
			.cssSequence(name, "animationend", el => el.removeClass(name));
		// play audio sound
		window.audio.play("move");
		// push state after move
		History.dispatch({ type: "history-push-state" });
	},
	coords() {
		let y = Game.board.findIndex(row => row.includes(PLAYER));
		let x = Game.board[y].indexOf(PLAYER);

		return {
			x,
			y,
			above: Game.board[y-1] ? Game.board[y-1][x] : OFF,
			below: Game.board[y+1] ? Game.board[y+1][x] : OFF,
			sideLeft: Game.board[y][x-1] || OFF,
			sideRight: Game.board[y][x+1] || OFF,
		};
	}
};
