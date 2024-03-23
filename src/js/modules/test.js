
let Test = {
	init(APP) {

		// return;

		setTimeout(() => APP.dispatch({ type: "set-game-level", arg: "1-98" }), 200);
		setTimeout(() => Anim.zoomGrid({ x: 6, y: 3, mini: "1-98.1" }), 1000);
		return;

		// setTimeout(() => Game.zoomPaint(1), 200);
		// setTimeout(() => Game.renderLevel("b5-m5"), 200);
		
		setTimeout(() => Game.renderLevel("1-4"), 200);
		// setTimeout(() => Game.renderLevel("2-7"), 200);

		// let xMenu = window.bluePrint.selectSingleNode(`//Menu[@click="set-editor-mode"]`);
		// setTimeout(() => APP.dispatch({ type: "set-editor-mode", xMenu }), 500);

		// setTimeout(() => window.find(`.exit`).addClass("ready"), 1000);
		// setTimeout(() => APP.content.addClass("game-won"), 1500);
	}
};
