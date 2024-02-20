
Level["2-5"] = {
	grid: 7,
	bg: "#2d746c",
	filter: "sepia(1) hue-rotate(85deg) saturate(1.75) brightness(0.8)",
	player: { y: 3, x: 3 },
	void: [{ y: 1, x: 3 }],
	exit: { y: 5, x: 2 },
	block: [
		{ y: 4, x: 4, color: "blue" },
		{ y: 3, x: 2, mini: "2-5.1" },
	],
	walls: [
		[{ "key": "NE" }, { "key": "N" }, { "key": "N" }, { "key": "NS" }, { "key": "N" }, { "key": "N" }, { "key": "NW" }],
		[{ "key": "E" }, { "key": "F" }, { "key": "WS","sub":["NW-NE"] }, {}, { "key": "E","sub":["NE-NW"] }, { "key": "F" }, { "key": "W" }],
		[{ "key": "E" }, { "key": "W","sub":["NW-NE"] }, {}, {}, { "key": "SE" }, { "key": "S" }, { "key": "W" }],
		[{ "key": "E" }, { "key": "W" }, {}, {}, {}, {}, { "key": "WE","sub":["NE-NW"] }],
		[{ "key": "E" }, { "key": "W" }, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "E" }, { "key": "W" }, {}, {}, { "key": "NE" }, { "key": "N" }, { "key": "W","sub":["NE-WS"] }],
		[{ "key": "SE" }, { "key": "S" }, { "key": "NS","sub":["NE-ES"] }, { "key": "NS" }, { "key": "S","sub":["NE-WS"] }, { "key": "S" }, { "key": "WS" }]
	]
};

Level["2-5.1"] = {
	grid: 5,
	bg: "#0c561c",
	filter: "sepia(1) hue-rotate(75deg) saturate(3) brightness(.9)",
	walls: [
		[{ "key": "NE" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NW" }],
		[{ "key": "WE","sub":["NW-NE"] }, {}, {}, {}, { "key": "WSE","sub":["NE-NW"] }],
		[{ "key": "WE" }, {}, {}, {}, {}],
		[{ "key": "WE" }, {}, {}, {}, { "key": "NWE" }],
		[{ "key": "SE" }, { "key": "NS","sub":["NE-ES"] }, { "key": "NS" }, { "key": "NS" }, { "key": "WS","sub":["NE-WS"] }],
	]
};
