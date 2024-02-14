
@import "./classes/point.js"
@import "./modules/player.js"
@import "./modules/test.js"


const parabox = {
	init() {
		// fast references
		this.content = window.find("content");

		// init objects
		Player.init();

		// DEV-ONLY-START
		Test.init(this);
		// DEV-ONLY-END
	},
	dispatch(event) {
		switch (event.type) {
			// system events
			case "window.init":
				break;
			case "window.keystroke":
				switch (event.char) {
					case "up":
					case "left":
					case "down":
					case "right": Player.move(event.char); break;
					case "space": Player.jump(); break;
				}
				break;
			// custom events
			case "open-help":
				karaqu.shell("fs -u '~/help/index.md'");
				break;
		}
	}
};

window.exports = parabox;
