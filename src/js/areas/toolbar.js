
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
			case "set-editor-mode":
				if (!event.xMenu.getAttribute("is-checked")) {
					event.xMenu.setAttribute("is-checked", "1");
					// switch toolbar toolset
					window.toolset = "edit-tools";
					// switch content mode
					Self.content.data({ mode: "editor" });
					// dispatch init event
					Self.editor.dispatch({ type: "init-mode" });
				} else {
					// update blueprint
					event.xMenu.removeAttribute("is-checked");
					// switch content mode
					Self.content.data({ mode: "game" });
					// switch toolbar toolset
					window.toolset = "default";
					// dispatch editor exit
					Self.editor.dispatch({ type: "exit-mode" });
				}
				break;
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
