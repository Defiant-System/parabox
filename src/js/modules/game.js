
let Game = {
	init() {
		// paint level
		this.paint(1);
		// init player object
		Player.init();
	},
	paint(i) {
		let APP = parabox,
			level = Level[i],
			htm = [];
		// level wrapper: START
		htm.push(`<div class="box board" style="--bg-color: ${level.bg}; --fg-filter: ${level.filter};">`);

		// voids
		for (let i=0, il=level.void.length; i<il; i++) {
			let spot = level.void[i];
			htm.push(`<div class="void" style="--y: ${spot.y}; --x: ${spot.x};"></div>`);
		}

		// exit
		htm.push(`<div class="exit" style="--y: ${level.exit.y}; --x: ${level.exit.x};"><i></i></div>`);

		// blocks
		for (let i=0, il=level.block.length; i<il; i++) {
			let block = level.block[i];
			htm.push(`<div class="box ${block.color}" style="--y: ${block.y}; --x: ${block.x};"></div>`);
		}

		// player
		htm.push(`<div class="box player" style="--y: ${level.player.y}; --x: ${level.player.x};"><i></i></div>`);

		// walls
		for (let y=0, yl=level.walls.length; y<yl; y++) {
			let row = level.walls[y];
			for (let x=0, xl=row.length; x<xl; x++) {
				let cell = row[x],
					sub = cell.sub ? cell.sub.map(s => `<u class="${s}"></u>`).join("") : "",
					str = cell.key ? `<span class="wall ${cell.key}" style="--y: ${y}; --x: ${x};">${sub}</span>` : "";
				htm.push(str);
			}
		}

		// level wrapper: END
		htm.push(`</div>`)
		// insert into DOM
		APP.content.html(htm.join(""));
	}
};
