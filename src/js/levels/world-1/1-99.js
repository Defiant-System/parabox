
Level["1-99"] = {
	grid: 7,
	bg: "#454",
	filter: "sepia(1) hue-rotate(65deg) saturate(1.25) brightness(.75)",
	player: { y: 2, x: 2 },
	exit: { y: 4, x: 2 },
	block: [
		{ y: 1, x: 5, mini: "1-99.1" },
		{ y: 4, x: 4, color: "yellow" }
	],
	walls: [
		[{ "key": "NE" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NW" }],
		[{ "key": "WE","sub":["NW-NE"] }, {}, {}, {}, {}, {}, { "key": "WE","sub":["NE-NW"] }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "SE" }, { "key": "NS","sub":["NE-ES"] }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "WS","sub":["NE-WS"] }]
	]
};

Level["1-99.1"] = {
	grid: 5,
	bg: "#24a",
	filter: "sepia(1) hue-rotate(175deg) saturate(1.75) brightness(.8)",
	void: [{ y: 3, x: 1 }],
	walls: [
		[{ "key": "NE" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NW" }],
		[{ "key": "WSE","sub":["NW-NE"] }, {}, {}, {}, { "key": "WE","sub":["NE-NW"] }],
		[{}, {}, { "key": "NWSE" }, {}, { "key": "WE" }],
		[{ "key": "NWE" }, {}, {}, {}, { "key": "WE" }],
		[{ "key": "SE" }, { "key": "NWS","sub":["NE-ES"] }, {}, { "key": "NSE" }, { "key": "WS","sub":["NE-WS"] }],
	]
};
