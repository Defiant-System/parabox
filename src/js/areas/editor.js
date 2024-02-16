
// parabox.content

{
	init() {
		// fast references
		this.els = {
			el: window.find(`.editor-view[data-area="editor"]`),
		};
	},
	dispatch(event) {
		let APP = parabox,
			Self = APP.content,
			el;
		// console.log(event);
		switch (event.type) {
			case "custom-event":
				break;
		}
	}
}
