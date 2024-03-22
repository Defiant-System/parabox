
let Anim = {
	init() {
		// fast references
		let APP = parabox,
			trans = APP.content.find(".trans"),
			view = APP.content.find(".game-view");
		this.els = {
			trans,
			actor: trans.find(".player"),
			topLevel: view.find(".top-level"),
			zoomLevel: view.find(".zoom-level"),
		};
	},
	getBoard(el) {
		let board = el.find("> .board:first");
		return {
			grid: {
				w: parseInt(board.cssProp("--w"), 10),
				h: parseInt(board.cssProp("--h"), 10),
				size: parseInt(board.cssProp("--size"), 10),
			},
			offset: {
				top: +board.prop("offsetTop"),
				left: +board.prop("offsetLeft"),
				width: +board.prop("offsetWidth"),
				height: +board.prop("offsetHeight"),
			}
		};
	},
	zoomOut() {
		this.els.zoomLevel.cssSequence("!show", "transitionend", el => {
			el.html("");
		});

		this.els.topLevel.find(`> .board`).css({ transform: "" });

		// temp flag
		delete this.zoomed;
	},
	zoomGrid(coord) {
		// render mini map
		let player = { y: 2, x: -1 },
			{ htm } = Game.paint("1-99.1", { player, zoom: true });
		this.els.zoomLevel.html(htm.join(""));

		/* from:    g: 9x9    w: 553    t: 69     s: 62    
		 * to:      g: 5x5    w: 405    t: 122    s: 82   
		 * coord:   x: 6      y: 3
		 */

		let from = this.getBoard(this.els.topLevel),
			to = this.getBoard(this.els.zoomLevel),
			scale = to.offset.width / from.grid.size,
			tX = ((from.grid.w * to.offset.width) / 2) - (from.offset.width / 2) - (coord.x * to.offset.width) - (from.offset.left - to.offset.left),
			tY = ((from.grid.h * to.offset.height) / 2) - (from.offset.height / 2) - (coord.y * to.offset.width) - (from.offset.top - to.offset.top) + 30,
			transform = `translateX(${tX}px) translateY(${tY}px) scale(${scale})`;
		// zoom in
		this.els.topLevel.find(`> .board`).css({ transform });
		
		// "zoom" player
		Player.el.css({ transform: `translateX(25px) translateY(2px) scale(0.2` });

		// show zoomed board
		this.els.zoomLevel.addClass("show");

		// temp flag
		this.zoomed = true;
	}
};
