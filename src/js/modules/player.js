
let Player = {
	init() {
		this.el = window.find(".box.player");
		if (!this.length) return;
		
		// player position
		let x = +this.el.cssProp("--x"),
			y = +this.el.cssProp("--y");
		this.pos = new Point(x, y);

		// board limits
		this.max = {
			x: +this.el.parent().cssProp("--mX"),
			y: +this.el.parent().cssProp("--mY"),
		};
	},
	move(d) {
		let dir = [[0, -1], [-1, 0], [0, 1], [1, 0]];
		this.pos.add(dir[d]);
		this.pos.limit(this.max);

		this.el.css(this.pos.serialize());
	},
	jump() {
		this.el.cssSequence("jump", "animationend", el => el.removeClass("jump"));
	}
};
