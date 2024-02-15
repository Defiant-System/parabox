
let Test = {
	init(APP) {
		setTimeout(() => window.find(`.toolbar-tool_[data-arg="1"]`).trigger("click"), 100);
		// setTimeout(() => window.find(`.exit`).addClass("ready"), 1000);
	}
};
