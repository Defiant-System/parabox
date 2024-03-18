
let Anim = {
	init() {
		// fast references
		let APP = parabox,
			trans = APP.content.find(".trans");
		this.els = {
			trans,
			animFrom: trans.find(".anim-from"),
			animZoom: trans.find(".anim-zoom"),
			actor: trans.find(".player"),
		};
	},
	zoomGrid(coord) {
		console.log("zoom", coord);
	},
	async prepareTransition() {
		// 1. render "top" level
		Game.els.buffer.append(Game.el.clone(true));

		let margin = { n: 20, w: 7, s: 7, e: 7 },
			cached = await window.paint.toCache(Game.els.buffer, "top-board.png"),
			offset = Game.els.buffer.find(".board:nth(0)").offset(),
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
		// empty buffer
		Game.els.buffer.html("");


		// 2. render "zoom" level
		let { htm } = Game.paint("1-99.1", true),
			zBoard = Game.els.zoomLevel.html(htm.join("")).find(".box.board");
		Game.els.buffer.append(zBoard.clone(true));

		cached = await window.paint.toCache(Game.els.buffer, "zoom-board.png");
		offset = Game.els.buffer.find(".board:nth(0)").offset();
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
		// empty buffer
		Game.els.buffer.html("");


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
