
Level[7] = {
	bg: "#666",
	filter: "none",
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
	bg: "#15a",
	filter: "sepia(1) hue-rotate(145deg) saturate(1.75) brightness(0.75)",
	walls: [
		[{ key: "NE" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NW" }],
		[{ key: "WE" }, {}, {}, {}, { key: "WE" }],
		[{ key: "WE" }, {}, {}, {}, { key: "WE" }],
		[{ key: "WE" }, {}, {}, {}, { key: "WE" }],
		[{ key: "SE" }, { key: "NWS" }, {}, { key: "NSE" }, { key: "WS" }],
	]
};


Level[7.2] = {
	bg: "#b50",
	filter: "sepia(1) hue-rotate(225deg) saturate(1.5) brightness(0.85)",
	walls: [
		[{ key: "NSE" }, { key: "NS" }, { key: "NS" }, { key: "NW" }],
		[{}, {}, {}, { key: "WE" }],
		[{ key: "NWE" }, {}, {}, { key: "WE" }],
		[{ key: "SE" }, { key: "NWS" }, {}, { key: "WSE" }],
	]
};
