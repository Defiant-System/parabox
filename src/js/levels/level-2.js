
Level[1] = {
	bg: "#151",
	filter: "sepia(1) hue-rotate(225deg) saturate(1.25) brightness(0.85)",
	player: { y: 6, x: 4 },
	exit: { y: 7, x: 4 },
	void: [{ y: 7, x: 2 }, { y: 7, x: 6 }],
	block: [{ y: 3, x: 4, color: "brown" }, { y: 4, x: 4, color: "brown" }],
	walls: [
		[{ key: "NE" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "N" }, { key: "N" }, { key: "N" }, { key: "NW" }],
		[{ key: "WE", sub: ["NW-NE"] }, {}, {}, {}, {}, { key: "E", sub: ["NE-NW"] }, { key: "F" }, { key: "F" }, { key: "W" }],
		[{ key: "WE" }, {}, {}, {}, {}, { key: "E" }, { key: "F" }, { key: "F" }, { key: "W" }],
		[{ key: "WE" }, {}, {}, {}, {}, {}, {}, {}, { key: "WE" }],
		[{ key: "WE" }, {}, {}, {}, {}, {}, {}, {}, { key: "WE" }],
		[{ key: "WE" }, {}, {}, {}, {}, {}, {}, {}, { key: "WE" }],
		[{ key: "WE" }, {}, {}, {}, {}, {}, {}, {}, { key: "WE" }],
		[{ key: "WE" }, {}, {}, {}, {}, {}, {}, {}, { key: "WE" }],
		[{ key: "SE" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "WS", sub: ["NE-WS"] }],
	]
};
