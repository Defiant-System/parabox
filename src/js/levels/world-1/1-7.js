
Level["1-7"] = {
	grid: 9,
	bg: "#272",
	filter: "sepia(1) hue-rotate(65deg) saturate(1.15) brightness(.8)",
	player: { y: 5, x: 4 },
	exit: { y: 6, x: 1 },
	void: [
		{ y: 3, x: 2 },
		{ y: 3, x: 4 },
	],
	block: [
		{ y: 3, x: 5, mini: "1-7.1" },
		{ y: 3, x: 6, color: "red" }
	],
	walls: [
		[{ "key": "NE" }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "NW" }],
		[{ "key": "E" }, { "key": "F" }, { "key": "F" }, { "key": "F" }, { "key": "F" }, { "key": "F" }, { "key": "F" }, { "key": "F" }, { "key": "W" }],
		[{ "key": "E" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "W" }],
		[{ "key": "WE","sub": ["NW-NE"] }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE","sub": ["NE-NW"] }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "E" }, { "key": "N","sub": ["NE-ES"] }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "W","sub": ["NE-WS"] }],
		[{ "key": "SE" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "WS" }]
	]
};

Level["1-7.1"] = {
	grid: 3,
	bg: "#24a",
	filter: "sepia(1) hue-rotate(175deg) saturate(1.75) brightness(.8)",
	walls: [
		[{ "key": "NE" }, { "key": "NS" }, { "key": "NWS" }],
		[{ "key": "WE", "sub": ["NW-NE"] }, {}, {}],
		[{ "key": "WSE" }, {}, { "key": "NWSE" }],
	]
};
