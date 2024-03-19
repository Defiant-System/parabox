
Level["2-2"] = {
	grid: 9,
	bg: "#2d746c",
	filter: "sepia(1) hue-rotate(135deg) saturate(1.75) brightness(0.8)",
	player: { y: 6, x: 4 },
	exit: { y: 5, x: 6 },
	void: [{ y: 6, x: 6 }],
	block: [
		{ y: 2, x: 2, mini: "2-2.1" },
		{ y: 2, x: 4, color: "blue" },
	],
	walls: [
		[{ "key": "NE" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "N" }, { "key": "N" }, { "key": "NW" }],
		[{ "key": "WE","sub":["NW-NE"] }, {}, {}, {}, {}, {}, { "key": "E","sub":["NE-NW"] }, { "key": "F" }, { "key": "W" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, { "key": "E" }, { "key": "F" }, { "key": "W" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, { "key": "E" }, { "key": "F" }, { "key": "W" }],
		[{ "key": "E" }, { "key": "N","sub":["NE-ES"] }, { "key": "NW" }, {}, { "key": "NSE" }, { "key": "NS" }, { "key": "S","sub":["NE-WS"] }, { "key": "F" }, { "key": "W" }],
		[{ "key": "E" }, { "key": "S" }, { "key": "WS" }, {}, {}, {}, {}, { "key": "E","sub":["NE-NW"] }, { "key": "W" }],
		[{ "key": "WE","sub":["NW-NE"] }, {}, {}, {}, {}, {}, {}, { "key": "E" }, { "key": "W" }],
		[{ "key": "E" }, { "key": "N","sub":["NE-ES"] }, { "key": "NW" }, {}, {}, {}, {}, { "key": "E" }, { "key": "W" }],
		[{ "key": "SE" }, { "key": "S" }, { "key": "S" }, { "key": "NS","sub":["NE-ES"] }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "S","sub":["NE-WS"] }, { "key": "WS" }]
	]
};

Level["2-2.1"] = {
	grid: 5,
	bg: "#56370c",
	filter: "sepia(1) hue-rotate(345deg) saturate(3) brightness(.9)",
	walls: [
		[{ key: "NE" }, { key: "NS" }, { key: "NS"}, { key: "NS" }, { key: "NW" }],
		[{ key: "WE","sub":["NW-NE"] }, {}, {}, {}, { key: "WSE","sub":["NE-NW"] }],
		[{ key: "WE" }, {}, {}, {}, {}],
		[{ key: "WE" }, {}, {}, {}, { key: "NWE" }],
		[{ key: "SE" }, { key: "NS", sub: ["NE-ES"] }, { key: "NS" }, { key: "NS" }, { key: "WS", "sub":["NE-WS"] }],
	]
};
