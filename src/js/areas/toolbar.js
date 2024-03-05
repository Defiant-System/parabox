
// parabox.toolbar

{
	init() {
		
	},
	dispatch(event) {
		let APP = parabox,
			Self = APP.toolbar,
			name,
			value,
			el;
		// console.log(event);
		switch (event.type) {
			// MODE: game
			case "toggle-zoom":
				let isOn = APP.content.hasClass("show-from-default");
				APP.content.toggleClass("show-from-default", isOn);
				return !isOn;
			// MODE: editor
			case "set-board-size":
				// reset game level
				delete Game.level;
				// dispatch event
				APP.editor.dispatch({ type: "paint-board", size: +event.arg });
				return true;
			case "set-game-level":
				if (APP.content.data("mode") === "editor") {
					let xMenu = window.bluePrint.selectSingleNode(`//Menu[@click="set-editor-mode"]`);
					APP.dispatch({ type: "set-editor-mode", xMenu });
				}
				Game.renderLevel(event.arg);

				APP.content.removeClass("game-won").data({ mode: "game" });
				return true;
		}
	}
}
