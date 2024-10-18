
let Level = {
	getNext(id="1-1") {
		let [world, level] = id.split("-").map(i => +i),
			next = `${world}-${level+1}`;
		return this[next] ? next : `${world+1}-1`;
	},
	get(id, extend) {
		let data = { ...this[id], ...extend };
		let grid = data.grid.toString();

		if (id.toString().includes(".")) {
			let [big, mini] = id.toString().split("."),
				[w, b] = big.split("-"),
				parent = this[big];
			// data.block.map(b => b.mini ? (b.mini = mini) : null);
			// complete grid name
			grid = `${parent.grid}x${data.grid}`;
		} else if (data.block) {
			data.block.map(b => {
				if (b.mini) {
					grid += `x${this[b.mini].grid}`;
				}
			});
		}

		return { id, grid, data };
	}
};

// for dev purpose
@import "./world-1/1-99.js"
@import "./world-1/1-98.js"


@import "./world-1/1-1.js"


