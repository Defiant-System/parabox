
Level["3-8"] = {
	grid: 9,
	bg: "#69814edb",
	filter: "sepia(1) hue-rotate(95deg) saturate(2) brightness(.6)",
	player: { y: 6, x: 4 },
	void: [
		{ y: 1, x: 2 },
		{ y: 2, x: 6 }
	],
	exit: { y: 4, x: 7 },
	block: [
		{ y: 5, x: 5, color: "yellow" },
		{ y: 5, x: 3, mini: "3-8" }
	],
	walls: [
		[{ "key": "NE" }, { "key": "N" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "N" }, { "key": "NW" }],
		[{ "key": "E" }, { "key": "W","sub":["NW-NE"] }, {}, {}, {}, {}, {}, { "key": "E","sub":["NE-NW"] }, { "key": "W" }],
		[{ "key": "E" }, { "key": "F" }, { "key": "NW","sub":["NE-ES"] }, {}, {}, {}, {}, { "key": "E" }, { "key": "W" }],
		[{ "key": "SE" }, { "key": "S" }, { "key": "WS" }, {}, { "key": "NSE" }, { "key": "NS" }, { "key": "NS" }, { "key": "S","sub":["NE-WS"] }, { "key": "W" }],
		[{}, {}, {}, {}, {}, {}, {}, {}, { "key": "WE","sub":["NE-NW"] }],
		[{ "key": "NWE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "SE" }, { "key": "NS","sub":["NE-ES"] }, { "key": "NS" }, { "key": "NWS" }, {}, { "key": "NSE" }, { "key": "NS" }, { "key": "NS" }, { "key": "WS","sub":["NE-WS"] }]
	]
};
