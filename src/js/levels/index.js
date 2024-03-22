
let Level = {
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
@import "./world-1/1-2.js"
@import "./world-1/1-3.js"
@import "./world-1/1-4.js"
@import "./world-1/1-5.js"
@import "./world-1/1-6.js"
@import "./world-1/1-7.js"
@import "./world-1/1-8.js"
@import "./world-1/1-9.js"

@import "./world-2/2-1.js"
@import "./world-2/2-2.js"
@import "./world-2/2-3.js"
@import "./world-2/2-4.js"
@import "./world-2/2-5.js"
@import "./world-2/2-6.js"
@import "./world-2/2-7.js"
@import "./world-2/2-8.js"
@import "./world-2/2-9.js"

@import "./world-3/3-1.js"
@import "./world-3/3-2.js"
@import "./world-3/3-3.js"
@import "./world-3/3-4.js"
@import "./world-3/3-5.js"
@import "./world-3/3-6.js"
@import "./world-3/3-7.js"
@import "./world-3/3-8.js"
@import "./world-3/3-9.js"

