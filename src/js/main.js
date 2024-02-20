
@import "./classes/point.js"
@import "./modules/history.js"
@import "./modules/utils.js"
@import "./modules/player.js"
@import "./modules/game.js"
@import "./modules/test.js"

@import "./levels/index.js"


const parabox = {
	init() {
		// fast references
		this.content = window.find("content");

		// init all sub-objects
		Object.keys(this)
			.filter(i => typeof this[i].init === "function")
			.map(i => this[i].init(this));

		// init objects
		History.init();
		Game.init();
		
		// DEV-ONLY-START
		Test.init(this);
		// DEV-ONLY-END
	},
	dispatch(event) {
		let Self = parabox,
			name,
			pEl,
			el;
		// console.log(event);
		switch (event.type) {
			// system events
			case "window.init":
				break;
			case "window.keystroke":
				switch (event.char) {
					case "up":
					case "left":
					case "down":
					case "right": Game.move(event.char); break;
				}
				break;
			// custom events
			case "history-go-prev":
			case "history-go-next":
				return History.dispatch(event);
			case "toggle-zoom":
				let isOn = Self.content.hasClass("show-zoomed");
				Self.content.toggleClass("show-zoomed", isOn);
				return !isOn;
			case "output-pgn":
				return Self.editor.dispatch(event);
			case "set-game-level":
				if (Self.content.data("mode") === "editor") {
					let xMenu = window.bluePrint.selectSingleNode(`//Menu[@click="set-editor-mode"]`);
					Self.dispatch({ type: "set-editor-mode", xMenu });
				}
				Game.renderLevel(event.arg);
				break;
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
			case "close-congratulations":
				Self.content.removeClass("game-won");
				break;
			case "open-help":
				karaqu.shell("fs -u '~/help/index.md'");
				break;
			default:
				if (event.el) {
					pEl = event.el.data("area") ? event.el : event.el.parents("div[data-area]");
					name = pEl.data("area");
					if (pEl.length && Self[name].dispatch) {
						return Self[name].dispatch(event);
					}
				}
		}
	},
	toolbar: @import "areas/toolbar.js",
	editor: @import "areas/editor.js",
};

window.exports = parabox;
