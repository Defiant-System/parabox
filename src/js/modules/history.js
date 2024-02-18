
let History = {
	init() {
		// fast references
		this.els = {
			toolUndo: window.find(`.toolbar-tool_[data-click="history-go-prev"]`),
			toolRedo: window.find(`.toolbar-tool_[data-click="history-go-next"]`),
		};

		// create move history
		this._history = new window.History;
	},
	dispatch(event) {
		let Self = History,
			name,
			pEl,
			el;
		// console.log(event);
		switch (event.type) {
			case "history-go-prev":
			case "history-go-next":
				console.log(event);
				break;
			case "history-push-state":
				Self._history.push({ a: 1 });
				// update toolbar buttons
				Self.dispatch({ type: "toolbar-update" });
				break;
			case "toolbar-update":
				Self.els.toolUndo.toggleClass("tool-disabled_", Self._history.canGoBack);
				Self.els.toolRedo.toggleClass("tool-disabled_", Self._history.canGoForward);
				break;
		}
	}
};
