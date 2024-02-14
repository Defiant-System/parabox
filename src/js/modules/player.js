
let Player = {
	init() {
		this.el = window.find(".box.player");
		
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
	move(dir) {
		let name = `go-${dir}`,
			vec = {
				up: [0, -1],
				left: [-1, 0],
				down: [0, 1],
				right: [1, 0],
			};
		this.pos.add(vec[dir]);
		this.pos.limit(this.max);

		this.el
			.css(this.pos.serialize())
			.cssSequence(name, "animationend", el => el.removeClass(name));
	},
	jump() {
		this.el.cssSequence("jump", "animationend", el => el.removeClass("jump"));
	}
};
