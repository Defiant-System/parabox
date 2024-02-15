
Level[1] = {
	bg: "#369",
	filter: "sepia(1) hue-rotate(145deg) saturate(1.5) brightness(0.75)",
	player: { y: 2, x: 4 },
	exit: { y: 1, x: 1 },
	void: [{ y: 5, x: 5 }],
	block: [{ y: 3, x: 4, color: "red" }],
	walls: [
		[{ key: "NE" }, { key: "NS" }, { key: "N" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NW" }],
		[{ key: "WE", sub: ["NW-NE"] }, {}, { key: "WE", sub: ["NE-NW", "NW-NE"] }, {}, {}, {}, { key: "WE", sub: ["NE-NW"] }],
		[{ key: "WE" }, {}, { key: "WSE" }, {}, {}, {}, { key: "WE" }],
		[{ key: "WE" }, {}, {}, {}, {}, {}, { key: "WE" }],
		[{ key: "WE" }, {}, {}, {}, { key: "NWE" }, {}, { key: "WE" }],
		[{ key: "WE" }, {}, {}, {}, { key: "WE" }, {}, { key: "WE" }],
		[{ key: "SE" }, { key: "NS", sub: ["NE-ES"] }, { key: "NS" }, { key: "NS" }, { key: "S", sub: ["NE-WS"] }, { key: "NS", sub: ["NE-ES"] }, { key: "WS", sub: ["NE-WS"] }],
	]
};
