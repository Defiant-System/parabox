
class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	serialize() {
		return {
			"--x": this.x,
			"--y": this.y,
		};
	}

	isOn(x, y) {
		return this.x === x && this.y === y;
	}

	add(v) {
		this.x += v[0];
		this.y += v[1];
	}

	limit(max) {
		if (this.x < 0) this.x = 0;
		if (this.y < 0) this.y = 0;
		if (this.x > max.x) this.x = max.x;
		if (this.y > max.y) this.y = max.y;
	}
}
