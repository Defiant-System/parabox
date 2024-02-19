
let Test = {
	init(APP) {

		// setTimeout(() => Game.zoomPaint(1), 200);
		// setTimeout(() => Game.renderLevel("b5-m5"), 200);
		setTimeout(() => window.find(`.toolbar-tool_[data-arg="9"]`).trigger("click"), 100);

		setTimeout(() => window.find(`.toolbar-tool_[data-click="toggle-zoom"]`).trigger("click"), 1500);

		// let xMenu = window.bluePrint.selectSingleNode(`//Menu[@click="set-editor-mode"]`);
		// setTimeout(() => APP.dispatch({ type: "set-editor-mode", xMenu }), 500);

		// setTimeout(() => window.find(`.exit`).addClass("ready"), 1000);
		// setTimeout(() => APP.content.addClass("game-won"), 1500);
	}
};
