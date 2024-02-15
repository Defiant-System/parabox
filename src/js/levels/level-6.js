
Level[6] = {
	bg: "#666",
	filter: "none",
	player: { y: 3, x: 2 },
	exit: { y: 1, x: 1 },
	void: [{ y: 1, x: 2 }],
	block: [{ y: 3, x: 3, color: "yellow" }],
	walls: [
		[{ key: "NE" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NW" }],
		[{ key: "WE", sub: ["NW-NE"] }, {}, {}, {}, {}, {}, {}, {}, { key: "WE", sub: ["NE-NW"] }],
		[{ key: "WE" }, {}, {}, {}, {}, {}, {}, {}, { key: "WE" }],
		[{ key: "WE" }, {}, {}, {}, {}, {}, {}, {}, { key: "WE" }],
		[{ key: "WE" }, {}, {}, {}, {}, {}, {}, {}, { key: "WE" }],
		[{ key: "WE" }, {}, {}, {}, {}, {}, {}, {}, { key: "WE" }],
		[{ key: "WE" }, {}, {}, {}, {}, {}, {}, {}, { key: "WE" }],
		[{ key: "WE" }, {}, {}, {}, {}, {}, {}, {}, { key: "WE" }],
		[{ key: "SE" }, { key: "NS", sub: ["NE-ES"] }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "WS", sub: ["NE-WS"] }],
	]
};
