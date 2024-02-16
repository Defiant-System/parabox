
Level[7] = {
	bg: "#666",
	filter: "none",
	player: { y: 3, x: 2 },
	exit: null,
	void: [],
	block: [{ y: 1, x: 2, mini: 7.1 }],
	walls: [
		[{ key: "NE" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NW" }],
		[{ key: "WE", sub: ["NW-NE"] }, {}, {}, {}, { key: "WE", sub: ["NE-NW"] }],
		[{ key: "WE" }, {}, {}, {}, { key: "WE" }],
		[{ key: "WE" }, {}, {}, {}, { key: "WE" }],
		[{ key: "SE" }, { key: "NS", sub: ["NE-ES"] }, { key: "NS" }, { key: "NS" }, { key: "WS", sub: ["NE-WS"] }],
	]
};

Level[7.1] = {
	walls: [
		[{ key: "NE" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NW" }],
		[{ key: "WE", sub: ["NW-NE"] }, {}, {}, {}, { key: "WE", sub: ["NE-NW"] }],
		[{ key: "WE" }, {}, {}, {}, { key: "WE" }],
		[{ key: "WE" }, {}, {}, {}, { key: "WE" }],
		[{ key: "SE" }, { key: "NS", sub: ["NE-ES"] }, { key: "NS" }, { key: "NS" }, { key: "WS", sub: ["NE-WS"] }],
	]
};
