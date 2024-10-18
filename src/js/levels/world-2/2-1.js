
Level["2-1"] = {
	grid: 9,
	bg: "#6a684a",
	filter: "sepia(1) hue-rotate(315deg) saturate(1.75) brightness(0.8)",
	player: { y: 2, x: 6 },
	exit: { y: 6, x: 5 },
	void: [{ y: 7, x: 5 }],
	block: [
		{ y: 2, x: 4, mini: "2-1.1" },
		{ y: 3, x: 4, color: "brown" },
	],
	walls: [
		[{ "key": "NE" }, { "key": "N" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "N" }, { "key": "NW" }],
		[{ "key": "E" }, { "key": "W","sub":["NW-NE"] }, {}, {}, {}, {}, {}, { "key": "E","sub":["NE-NW"] }, { "key": "W" }],
		[{ "key": "E" }, { "key": "W" }, {}, {}, {}, {}, {}, { "key": "E" }, { "key": "W" }],
		[{ "key": "E" }, { "key": "W" }, {}, {}, {}, {}, {}, { "key": "E" }, { "key": "W" }],
		[{ "key": "E" }, { "key": "W" }, {}, {}, {}, {}, {}, { "key": "E" }, { "key": "W" }],
		[{ "key": "E" }, { "key": "W" }, {}, { "key": "NSE" }, { "key": "NS" }, { "key": "NS" }, { "key": "N" }, { "key": "F","sub":["NE-WS"] }, { "key": "W" }],
		[{ "key": "E" }, { "key": "W" }, {}, {}, {}, {}, { "key": "E","sub":["NE-NW"] }, { "key": "F" }, { "key": "W" }],
		[{ "key": "E" }, { "key": "W" }, {}, {}, {}, {}, { "key": "E" }, { "key": "F" }, { "key": "W" }],
		[{ "key": "SE" }, { "key": "S" }, { "key": "NS","sub":["NE-ES"] }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "S","sub":["NE-WS"] }, { "key": "S" }, { "key": "WS" }]
	]
};

Level["2-1.1"] = {
	grid: 5,
	bg: "#7d5622",
	filter: "sepia(1) hue-rotate(345deg) saturate(3) brightness(.9)",
	walls: [
		[{ key: "NE" }, { key: "NS" }, { key: "NS"}, { key: "NS" }, { key: "NW" }],
		[{ key: "WE","sub":["NW-NE"] }, {}, {}, {}, { key: "WSE","sub":["NE-NW"] }],
		[{ key: "WE" }, {}, {}, {}, {}],
		[{ key: "WE" }, {}, {}, {}, { key: "NWE" }],
		[{ key: "SE" }, { key: "NS", sub: ["NE-ES"] }, { key: "NS" }, { key: "NS" }, { key: "WS", "sub":["NE-WS"] }],
	]
};
