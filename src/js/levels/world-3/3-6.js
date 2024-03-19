
Level["3-6"] = {
	grid: 9,
	bg: "#9c7151",
	filter: "sepia(1) hue-rotate(325deg) saturate(1.15) brightness(.75)",
	player: { y: 6, x: 4 },
	void: [
		{ y: 5, x: 3 },
		{ y: 5, x: 5 }
	],
	exit: { y: 5, x: 4 },
	block: [
		{ y: 2, x: 3, color: "pink" },
		{ y: 2, x: 5, mini: "3-6" }
	],
	walls: [
		[{ "key": "NE" }, { "key": "N" }, { "key": "N" }, { "key": "NW" }, {}, { "key": "NE" }, { "key": "NS" }, { "key": "N" }, { "key": "NW" }],
		[{ "key": "E" }, { "key": "S" }, { "key": "S" }, { "key": "WS" }, {}, { "key": "WSE","sub":["NW-NE"] }, {}, { "key": "SE","sub":["NE-NW"] }, { "key": "W" }],
		[{ "key": "WE","sub":["NW-NE"] }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE","sub":["NE-NW"] }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "E" }, { "key": "N","sub":["NE-ES"] }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "W","sub":["NE-WS"] }],
		[{ "key": "SE" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "WS" }]
	]
};
