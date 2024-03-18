
let Anim = {
	init() {
		// fast references
		let APP = parabox,
			trans = APP.content.find(".trans"),
			view = APP.content.find(".game-view");
		this.els = {
			trans,
			actor: trans.find(".player"),
			animFrom: trans.find(".anim-from"),
			animZoom: trans.find(".anim-zoom"),
			topLevel: view.find(".top-level"),
			zoomLevel: view.find(".zoom-level"),
			buffer: view.find(".buffer"),
		};
	},
	zoomGrid(coord) {
		// render mini map
		let player = { y: 2, x: 0 },
			{ htm } = Game.paint("1-99.1", { player, zoom: true });
		this.els.zoomLevel.html(htm.join(""));

		let grid = 5,
			scale = 7.2,
			tX = -894,
			tY = 539,
			transform = `translateX(${tX}px) translateY(${tY}px) scale(${scale})`;

		console.log( transform );
		this.els.topLevel.find(`> .board`).css({ transform });
	},
	zoomOut() {
		this.els.zoomLevel.html("");
		this.els.topLevel.find(`> .board`).css({ transform: "" });
	},
	async zoomGrid_(coord) {
		// 1. render "top" level
		this.els.buffer.append(Game.el.clone(true));

		let margin = { n: 20, w: 7, s: 7, e: 7 },
			cached = await window.paint.toCache(this.els.buffer, "top-board.png"),
			offset = this.els.buffer.find(".board:nth(0)").offset(),
			oY = margin.n - offset.top,
			oX = margin.e - offset.left,
			tY = offset.top - margin.n,
			tX = offset.left - margin.e,
			width = offset.width + margin.w + margin.e,
			height = offset.height + margin.n + margin.s;

		this.els.animFrom.css({
			// display: "none",
			"background-image": `url(${cached})`,
			"background-position": `${oX}px ${oY}px`,
			transform: `translateX(${tX}px) translateY(${tY}px)`,
			width,
			height,
		});
		// empty render buffer
		this.els.buffer.html("");


		// 2. render "zoom" level
		let { htm } = Game.paint("1-99.1", { zoom: true }),
			zBoard = this.els.zoomLevel.html(htm.join("")).find(".box.board");
		this.els.buffer.append(zBoard.clone(true));

		cached = await window.paint.toCache(this.els.buffer, "zoom-board.png");
		offset = this.els.buffer.find(".board:nth(0)").offset();
		oY = margin.n - offset.top;
		oX = margin.e - offset.left;
		tY = offset.top - margin.n;
		tX = offset.left - margin.e;
		width = offset.width + margin.w + margin.e;
		height = offset.height + margin.n + margin.s;

		let atX = tX + 126,
			atY = tY - 66,
			sX = .15,
			sY = .16;

		this.els.animZoom.css({
			// display: "none",
			"background-image": `url(${cached})`,
			"background-position": `${oX}px ${oY}px`,
			transform: `translateX(${atX}px) translateY(${atY}px) scale(${sX}, ${sY})`,
			width,
			height,
		});
		// empty render buffer
		this.els.buffer.html("");


		// 3. position "player"
		this.els.actor.css({
			// display: "none",
			transform: `translateY(224px) translateX(361px)`,
			"--size": `62px`,
			"--bW": `2px`,
			"--bR": `8px`,
		});

		setTimeout(() => {
			this.els.animFrom.css({
				transform: `translateX(-750px) translateY(440px) scale(6.5)`,
			});

			this.els.animZoom.css({
				transform: `translateX(${tX}px) translateY(${tY}px) scale(1, 1)`,
			});

			this.els.actor.css({
				transform: `translateY(273px) translateX(123px)`,
				"--size": `82px`,
			});

			this.els.trans.cssSequence("play", "transitionend", el => {
				console.log(el);
			});

		}, 100);
	}
};
