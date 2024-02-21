
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
				let isOn = APP.content.hasClass("show-zoomed");
				APP.content.toggleClass("show-zoomed", isOn);
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
