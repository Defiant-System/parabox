
let Test = {
	init(APP) {

		setTimeout(() => window.find(`.toolbar-tool_[data-arg="1"]`).trigger("click"), 100);
		// setTimeout(() => Game.checkWin(), 1000);

		// let xMenu = window.bluePrint.selectSingleNode(`//Menu[@click="set-editor-mode"]`);
		// setTimeout(() => APP.dispatch({ type: "set-editor-mode", xMenu }), 500);

		// setTimeout(() => window.find(`.exit`).addClass("ready"), 1000);
		// setTimeout(() => APP.content.addClass("game-won"), 1500);
	}
};
