
Level[9] = {
	grid: 7,
	bg: "#795d7d",
	filter: "sepia(.5) hue-rotate(245deg) saturate(3.5) brightness(.9)",
	player: { y: 2, x: 4 },
	void: [{ y: 4, x: 3 }],
	block: [
		{ y: 2, x: 2, color: "yellow" },
		{ y: 4, x: 4, mini: 9.1 },
	],
	walls: [
		[{ "key": "NE" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NW" }],
		[{ "key": "WE","sub":["NW-NE"] }, {}, {}, {}, {}, {}, { "key": "WE","sub":["NE-NW"] }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, { "key": "NE" }, { "key": "W","sub":["NE-WS"] }],
		[{ "key": "WE" }, {}, {}, {}, { "key": "NE" }, { "key": "F","sub":["NE-WS"] }, { "key": "W" }],
		[{ "key": "SE" }, { "key": "NS","sub":["NE-ES"] }, { "key": "NS" }, { "key": "NS" }, { "key": "S","sub":["NE-WS"] }, { "key": "S" }, { "key": "WS" }]
	]
};

Level[9.1] = {
	grid: 5,
	bg: "#24a",
	filter: "sepia(1) hue-rotate(175deg) saturate(1.75) brightness(.8)",
	exit: { y: 2, x: 3 },
	walls: [
		[{ "key": "NE" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NW" }],
		[{ "key": "WSE","sub":["NW-NE"] }, {}, {}, {}, { "key": "WE","sub":["NE-NW"] }],
		[{}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "NWE" }, {}, {}, {}, { "key": "WE" }],
		[{ "key": "SE" }, { "key": "NS","sub":["NE-ES"] }, { "key": "NS" }, { "key": "NS" }, { "key": "WS","sub":["NE-WS"] }],
	]
};
