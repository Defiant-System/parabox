
Level["3-3"] = {
	grid: 9,
	bg: "#62764F",
	filter: "sepia(1) hue-rotate(70deg) saturate(1.75) brightness(0.7)",
	player: { y: 6, x: 2 },
	void: [{ y: 1, x: 7 }],
	exit: { y: 1, x: 3 },
	block: [
		{ y: 4, x: 4, color: "brown" },
		{ y: 4, x: 2, mini: "3-3.1" }
	],
	walls: [
		[{ "key": "NE" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "N" }, { "key": "NS" }, { "key": "NW" }],
		[{ "key": "WE","sub":["NW-NE"] }, {}, {}, {}, {}, {}, { "key": "WSE","sub":["NE-NW","NW-NE"] }, {}, { "key": "WE","sub":["NE-NW"] }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, { "key": "NSE" }, { "key": "NS" }, { "key": "W","sub":["NE-WS"] }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE","sub":["NE-NW"] }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, { "key": "NE" }, { "key": "NW" }, {}, {}, { "key": "WE" }],
		[{ "key": "SE" }, { "key": "NS","sub":["NE-ES"] }, { "key": "NS" }, { "key": "NS" }, { "key": "S","sub":["NE-WS"] }, { "key": "S" }, { "key": "NS","sub":["NE-ES"] }, { "key": "NS" }, { "key": "WS","sub":["NE-WS"] }]
	]
};

Level["3-3.1"] = {
	grid: 5,
	bg: "#936a3f",
	filter: "sepia(1) hue-rotate(355deg) saturate(3) brightness(.8)",
	walls: [
		[{ "key": "NE" }, { "key": "NW" }, {}, { "key": "NE" }, { "key": "NW" }],
		[{ "key": "SE" }, { "key": "WS" }, {}, { "key": "E" }, { "key": "W" }],
		[{}, {}, {}, { "key": "E" }, { "key": "W" }],
		[{ "key": "NE" }, { "key": "N" }, { "key": "N" }, { "key": "F","sub":["NE-WS"] }, { "key": "W" }],
		[{ "key": "SE" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "WS" }],
	]
};
