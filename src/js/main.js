
@import "./classes/point.js"
@import "./modules/utils.js"
@import "./modules/player.js"
@import "./modules/game.js"
@import "./modules/test.js"

@import "./levels/index.js"


const parabox = {
	init() {
		// fast references
		this.content = window.find("content");

		// init objects
		Game.init();

		// DEV-ONLY-START
		Test.init(this);
		// DEV-ONLY-END
	},
	dispatch(event) {
		let Self = parabox,
			el;
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
			case "set-game-level":
				Game.renderLevel(+event.arg);
				return true;
			case "close-congratulations":
				Self.content.removeClass("game-won");
				break;
			case "open-help":
				karaqu.shell("fs -u '~/help/index.md'");
				break;
		}
	}
};

window.exports = parabox;
