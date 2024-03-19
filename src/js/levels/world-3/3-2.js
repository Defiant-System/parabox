
Level["3-2"] = {
	grid: 9,
	bg: "#848484",
	filter: "sepia(1) saturate(0) brightness(0.9)",
	player: { y: 4, x: 6 },
	void: [
		{ y: 4, x: 1 },
		{ y: 4, x: 4 },
	],
	exit: { y: 6, x: 7 },
	block: [
		{ y: 3, x: 3, mini: "3-2.1" },
		{ y: 5, x: 3, mini: "3-2.2" },
	],
	walls: [
		[{ "key": "NE" }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "NW" }],
		[{ "key": "E" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "W" }],
		[{ "key": "WE","sub":["NW-NE"] }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE","sub":["NE-NW"] }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "E" }, { "key": "N","sub":["NE-ES"] }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "W","sub":["NE-WS"] }],
		[{ "key": "SE" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "WS" }]
	]
};

Level["3-2.1"] = {
	grid: 3,
	bg: "#3f7ac6",
	filter: "sepia(1) hue-rotate(165deg) saturate(2) brightness(.8)",
	void: [{ y: 1, x: 1 }],
	block: [
		{ y: 2, x: 1, color: "red" }
	],
	walls: [
		[{ "key": "NE" }, { "key": "NS" }, { "key": "NW" }],
		[{ "key": "WE","sub":["NW-NE"] }, {}, { "key": "WE","sub":["NE-NW"] }],
		[{ "key": "WSE" }, {}, { "key": "WSE" }],
	]
};

Level["3-2.2"] = {
	grid: 7,
	bg: "#3f7ac6",
	filter: "sepia(1) hue-rotate(165deg) saturate(2) brightness(.8)",
	walls: [
		[{ "key": "NE" }, { "key": "N" }, { "key": "N" }, { "key": "NS" }, { "key": "NS" }, { "key": "N" }, { "key": "NW" }],
		[{ "key": "E" }, { "key": "S" }, { "key": "WS","sub":["NW-NE"] }, {}, {}, { "key": "SE","sub":["NE-NW"] }, { "key": "W" }],
		[{ "key": "WE","sub":["NW-NE"] }, {}, {}, {}, {}, {}, { "key": "WSE","sub":["NE-NW"] }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}],
		[{ "key": "E" }, { "key": "NW","sub":["NE-ES"] }, {}, {}, {}, {}, { "key": "NWE" }],
		[{ "key": "E" }, { "key": "F" }, { "key": "N","sub":["NE-ES"] }, { "key": "NW" }, {}, {}, { "key": "WE" }],
		[{ "key": "SE" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "NS","sub":["NE-ES"] }, { "key": "NS" }, { "key": "WS","sub":["NE-WS"] }]
	]
};
