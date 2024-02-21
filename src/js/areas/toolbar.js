
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
		}
	}
}
