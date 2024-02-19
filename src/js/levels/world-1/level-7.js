
Level[7] = {
	bg: "#272",
	filter: "sepia(1) hue-rotate(65deg) saturate(1.15) brightness(.8)",
	player: { y: 2, x: 1 },
	exit: null,
	void: [],
	block: [{ y: 1, x: 1, mini: 7.1 }, { y: 1, x: 3, mini: 7.2 }],
	walls: [
		[{ key: "NE" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NW" }],
		[{ key: "WE", sub: ["NW-NE"] }, {}, {}, {}, { key: "WE", sub: ["NE-NW"] }],
		[{ key: "WE" }, {}, {}, {}, { key: "WE" }],
		[{ key: "WE" }, {}, {}, {}, { key: "WE" }],
		[{ key: "SE" }, { key: "NS", sub: ["NE-ES"] }, { key: "NS" }, { key: "NS" }, { key: "WS", sub: ["NE-WS"] }],
	]
};

Level[7.1] = {
	bg: "#24a",
	filter: "sepia(1) hue-rotate(175deg) saturate(1.75) brightness(.8)",
	walls: [
		[{ key: "NE" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NW" }],
		[{ key: "WE", sub: ["NW-NE"] }, {}, {}, {}, { key: "WE", sub: ["NE-NW"] }],
		[{ key: "WE" }, {}, {}, {}, { key: "WE" }],
		[{ key: "WE" }, {}, {}, {}, { key: "WE" }],
		[{ key: "SE" }, { key: "NWS", sub: ["NE-ES"] }, {}, { key: "NSE" }, { key: "WS", sub: ["NE-WS"] }],
	]
};


Level[7.2] = {
	bg: "#829",
	filter: "sepia(1) hue-rotate(245deg) saturate(1.5) brightness(.85)",
	walls: [
		[{ key: "NSE" }, { key: "NS" }, { key: "NW" }],
		[{}, {}, { key: "WE", sub: ["NE-NW"] }],
		[{ key: "NWSE" }, {}, { key: "WSE" }],
	]
};
