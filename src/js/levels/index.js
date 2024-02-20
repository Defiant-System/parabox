
let Level = {
	get(id) {
		let data = this[id],
			grid = data.grid.toString();

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


@import "./fit/big.js"
@import "./fit/mini.js"


@import "./world-1/index.js"
@import "./world-2/index.js"
