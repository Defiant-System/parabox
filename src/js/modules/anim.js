
let Anim = {
	init() {
		// fast references
		let APP = parabox,
			view = APP.content.find(".game-view");
		this.els = {
			view,
			topLevel: view.find(".top-level"),
			zoomLevel: view.find(".zoom-level"),
		};
	},
	getBoard(el) {
		let bEl = el.find("> .board:first"),
			pEl = el.find(".player").get(0);
		return {
			grid: {
				w: parseInt(bEl.cssProp("--w"), 10),
				h: parseInt(bEl.cssProp("--h"), 10),
				size: parseInt(bEl.cssProp("--size"), 10),
				bH: parseInt(bEl.cssProp("--bH"), 10),
			},
			offset: {
				top: +bEl.prop("offsetTop"),
				left: +bEl.prop("offsetLeft"),
				width: +bEl.prop("offsetWidth"),
				height: +bEl.prop("offsetHeight"),
			},
			player: {
				x: +pEl.cssProp("--x"),
				y: +pEl.cssProp("--y"),
			}
		};
	},
	zoomOut(playerCoords, direction) {
		console.log( playerCoords, direction );
		let exits = {
				up:    { y: -1, x: 0 },
				down:  { y: 1,  x: 0 },
				left:  { y: 0, x: -1 },
				right: { y: 0, x: 1 },
			};
		// zoom/fade out top-level player
		// this.els.topLevel.css({
		// 		"--btX": this.els.zoomLevel.cssProp("--btX"),
		// 		"--btY": this.els.zoomLevel.cssProp("--btY"),
		// 		"--btS": this.els.zoomLevel.cssProp("--btS"),
		// 		"--ptX": this.els.zoomLevel.cssProp("--ptX"),
		// 		"--ptY": this.els.zoomLevel.cssProp("--ptY"),
		// 		"--ptS": this.els.zoomLevel.cssProp("--ptS"),
		// 	});

		this.els.view.cssSequence("zoom-out", "transitionend", el => {
			// transport in to zoomed level
			Player.transport(this.els.topLevel, this.parentBoard);
			// reset root element
			el.removeClass("zoom-in zoom-out");
			// empty zoom level element
			this.els.zoomLevel.html("");
			// is-zoomed flag
			delete this.zoomed;
			// pause background worker
			Bg.dispatch({ type: "resume" });
		});
	},
	zoomGrid(coord) {
		// render mini map
		let grid = Level[coord.mini].grid,
			gX = grid - 1,
			gM = Math.floor(grid / 2),
			entrance = {
				up:    { y: gX, x: gM },
				down:  { y: 0,  x: gM },
				left:  { y: gM, x: gX },
				right: { y: gM, x: 0 },
			},
			player = entrance[coord.enter],
			{ board, htm } = Game.paint(coord.mini, { player, zoom: true }),
			from = this.getBoard(this.els.topLevel),
			to = this.getBoard(this.els.zoomLevel.html(htm.join(""))),
			btS = from.grid.size / to.offset.width,
			btX = (from.grid.size * (coord.x - Math.floor(from.grid.w / 2))) + 2,
			btY = (from.grid.size * (coord.y - Math.floor(from.grid.h / 2))) - to.grid.bH,
			ptS = to.offset.width / to.grid.size,
			ptX = 0,
			ptY = 0;

		// hide original mini map
		coord.el.addClass("hidden");
		
		switch (coord.enter) {
			case "up":
				ptY = to.offset.height * .5;
				break;
			case "down":
				ptY -= to.offset.height * .5;
				break;
			case "right":
				ptY += 10;
				ptX -= to.offset.width * .5;
				break;
			case "left":
				ptY += 10;
				ptX = to.offset.width * .5;
				break;
		}

		// render
		this.els.zoomLevel.css({
				"--btX": `${btX}px`, "--btY": `${btY}px`, "--btS": btS,
				"--ptX": `${ptX}px`, "--ptY": `${ptY}px`, "--ptS": ptS,
			});

		// top-level zoom in
		btX = ((from.grid.w * to.offset.width) / 2) - (from.offset.width / 2) - (coord.x * to.offset.width) - (from.offset.left - to.offset.left);
		btY = ((from.grid.h * to.offset.height) / 2) - (from.offset.height / 2) - (coord.y * to.offset.width) - (from.offset.top - to.offset.top) + 20;
		btS = to.offset.width / from.grid.size;
		this.els.topLevel.css({ "--btX": `${btX}px`, "--btY": `${btY}px`, "--btS": btS });
		
		// pre-anim frame
		this.els.view.addClass("pre-anim");

		requestAnimationFrame(() =>
			this.els.view.cssSequence("zoom-in", "transitionend", el => {
				// reset game-view element
				el.removeClass("pre-anim");
				// save reference to parent board
				this.parentBoard = Game.board;
				// transport in to zoomed level
				Player.transport(this.els.zoomLevel, board);
				// pause background worker
				Bg.dispatch({ type: "pause" });
				// is-zoomed flag
				this.zoomed = true;
			}));
	}
};
