
Level["3-5"] = {
	grid: 9,
	bg: "#6d6a0e",
	filter: "sepia(1) hue-rotate(45deg) saturate(2.5) brightness(.8)",
	player: { y: 3, x: 2 },
	void: [{ y: 7, x: 5 }],
	exit: { y: 6, x: 4 },
	block: [
		{ y: 1, x: 7, mini: "3-5" }
	],
	walls: [
		[{ "key": "NE" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NW" }],
		[{ "key": "WE","sub":["NW-NE"] }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE","sub":["NE-NW"] }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WSE" }, {}, {}, {}, {}, { "key": "NE" }, { "key": "NWS" }, {}, { "key": "WE" }],
		[{}, {}, {}, {}, {}, { "key": "WE","sub":["NW-NE"] }, {}, {}, { "key": "WE" }],
		[{ "key": "NE" }, { "key": "NW" }, {}, { "key": "NE" }, { "key": "NS" }, { "key": "W","sub":["NE-WS"] }, {}, {}, { "key": "WE" }],
		[{ "key": "E" }, { "key": "W" }, {}, { "key": "WSE","sub":["NW-NE"] }, {}, { "key": "WSE","sub":["NE-NW"] }, {}, {}, { "key": "WE" }],
		[{ "key": "E" }, { "key": "W" }, {}, {}, {}, {}, { "key": "NE" }, { "key": "N" }, { "key": "W","sub":["NE-WS"] }],
		[{ "key": "SE" }, { "key": "S" }, { "key": "NS","sub":["NE-ES"] }, { "key": "NWS" }, {}, { "key": "NSE" }, { "key": "S","sub":["NE-WS"] }, { "key": "S" }, { "key": "WS" }]
	]
};
