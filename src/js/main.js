
@import "./classes/point.js"
@import "./modules/history.js"
@import "./modules/utils.js"
@import "./modules/player.js"
@import "./modules/game.js"
@import "./modules/anim.js"
@import "./modules/bg.js"
@import "./modules/test.js"

@import "./levels/index.js"


// default settings
const defaultSettings = {
	"sound-fx": "on",
	"level": 1,
};


const parabox = {
	init() {
		// fast references
		this.content = window.find("content");

		// init all sub-objects
		Object.keys(this)
			.filter(i => typeof this[i].init === "function")
			.map(i => this[i].init(this));

		// init objects
		Bg.init();
		History.init();
		Game.init();
		Anim.init();

		// get settings, if any
		this.settings = window.settings.getItem("settings") || defaultSettings;
		// apply settings
		this.dispatch({ type: "apply-settings" });
		
		// DEV-ONLY-START
		Test.init(this);
		// DEV-ONLY-END
	},
	dispatch(event) {
		let Self = parabox,
			name,
			value,
			pEl,
			el;
		// console.log(event);
		switch (event.type) {
			// system events
			case "window.init":
				break;
			case "window.close":
				// kill bg canvas worker
				Bg.dispatch({ type: "dispose" });
				// save settings
				window.settings.setItem("settings", Self.settings);
				break;
			case "window.focus":
				// resume background worker
				Bg.dispatch({ type: "resume" });
				break;
			case "window.blur":
				// resume background worker
				Bg.dispatch({ type: "pause" });
				break;
			case "window.keystroke":
				switch (event.char) {
					case "up":
					case "left":
					case "down":
					case "right": Game.move(event.char); break;
				}
				break;
			// temp
			case "zoom-grid":
				el = $(event.target);
				pEl = el.nextAll(".player");
				if (!el.hasClass("mini")) return;
				value = {
					el,
					size: parseInt(el.cssProp("--size"), 10),
					mini: el.data("mini"),
					x: +el.cssProp("--x"),
					y: +el.cssProp("--y"),
					enter: "up"
				};

				switch (true) {
					case (+pEl.cssProp("--y") === 4): value.enter = "up"; break;
					case (+pEl.cssProp("--y") === 2): value.enter = "down"; break;
					case (+pEl.cssProp("--x") === 5): value.enter = "right"; break;
					case (+pEl.cssProp("--x") === 7): value.enter = "left"; break;
				}

				if (!el.cssProp("--x")) {
					value.x = Math.floor(event.offsetX / value.size);
					value.y = Math.floor(event.offsetY / value.size);
				}
				if (Anim.zoomed) Anim.zoomOut();
				else Anim.zoomGrid(value);
				break;
			case "zoom-out":
				Anim.zoomOut();
				break;
			case "bg-event":
				Bg.dispatch({ type: event.arg });
				break;
			// custom events
			case "history-go-prev":
			case "history-go-next":
				return History.dispatch(event);
			case "apply-settings":
				// apply settings
				for (name in Self.settings) {
					value = Self.settings[name];
					// update menu
					window.bluePrint.selectNodes(`//Menu[@check-group="${name}"]`).map(xMenu => {
						switch (name) {
							case "sound-fx":
								if (value === "on") {
									xMenu.setAttribute("is-checked", 1);
									Self.dispatch({ type: "toggle-sound", checked: 1 });
								} else {
									xMenu.removeAttribute("is-checked");
									Self.dispatch({ type: "toggle-sound", checked: -1 });
								}
								break;
							default:
								let xArg = xMenu.getAttribute("arg");
								xMenu.removeAttribute("is-checked");;
								if (xArg == value) {
									// update menu item
									xMenu.setAttribute("is-checked", 1);
									// call dispatch
									let type = xMenu.getAttribute("click");
									Self.dispatch({ type, arg: value});
								}
						}
					});
				}
				break;
			case "set-board-size":
				// reset game level
				delete Game.level;
				// dispatch event
				Self.editor.dispatch({ type: "paint-board", size: +event.arg });
				break;
			case "set-game-level":
				if (Self.content.data("mode") === "editor") {
					let xMenu = window.bluePrint.selectSingleNode(`//Menu[@click="set-editor-mode"]`);
					Self.dispatch({ type: "set-editor-mode", xMenu });
				}
				// html
				Game.renderLevel(event.arg);
				// window title
				let [world, level] = event.arg.split("-");
				window.title = `Parabox <i class="icon-heart"></i> World ${world} - Level ${level}`;

				// update app UI
				Self.content.removeClass("game-won").data({ mode: "game" });
				break;
			case "toggle-sound":
				window.audio.mute = event.checked < 0;
				// update settings
				Self.settings["sound-fx"] = window.audio.mute ? "off" : "on";
				break;
			case "output-pgn":
				return Self.editor.dispatch(event);
			case "reset-game":
				Self.content.data({ mode: "start" });
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
	editor: @import "areas/editor.js",
};

window.exports = parabox;
