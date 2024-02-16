
Level[7] = {
	bg: "#272",
	filter: "sepia(1) hue-rotate(265deg) saturate(1.15) brightness(.9)",
	player: { y: 3, x: 2 },
	exit: null,
	void: [],
	block: [{ y: 1, x: 1, mini: 7.1 }, { y: 2, x: 3, mini: 7.2 }],
	walls: [
		[{ key: "NE" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NW" }],
		[{ key: "WE", sub: ["NW-NE"] }, {}, {}, {}, { key: "WE", sub: ["NE-NW"] }],
		[{ key: "WE" }, {}, {}, {}, { key: "WE" }],
		[{ key: "WE" }, {}, {}, {}, { key: "WE" }],
		[{ key: "SE" }, { key: "NS", sub: ["NE-ES"] }, { key: "NS" }, { key: "NS" }, { key: "WS", sub: ["NE-WS"] }],
	]
};

Level[7.1] = {
	bg: "#149",
	filter: "none", //"sepia(1) hue-rotate(145deg) saturate(1.75) brightness(.65)",
	walls: [
		[{ key: "NE" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NW" }],
		[{ key: "WE", sub: ["NW-NE"] }, {}, {}, {}, { key: "WE", sub: ["NE-NW"] }],
		[{ key: "WE" }, {}, {}, {}, { key: "WE" }],
		[{ key: "WE" }, {}, {}, {}, { key: "WE" }],
		[{ key: "SE" }, { key: "NWS", sub: ["NE-ES"] }, {}, { key: "NSE" }, { key: "WS", sub: ["NE-WS"] }],
	]
};


Level[7.2] = {
	bg: "#b50",
	filter: "sepia(1) hue-rotate(225deg) saturate(1.5) brightness(.85) opacity(.95)",
	walls: [
		[{ key: "NSE" }, { key: "NS" }, { key: "NS" }, { key: "NW" }],
		[{}, {}, {}, { key: "WE", sub: ["NE-NW"] }],
		[{ key: "NWE" }, {}, {}, { key: "WE" }],
		[{ key: "SE" }, { key: "NWS", sub: ["NE-ES"] }, {}, { key: "WSE" }],
	]
};
