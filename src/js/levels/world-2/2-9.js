
Level["2-9"] = {
	grid: 9,
	bg: "#60825c",
	filter: "sepia(1) hue-rotate(35deg) saturate(1) brightness(0.85)",
	player: { y: 2, x: 4 },
	void: [{ y: 5, x: 3 }],
	exit: { y: 7, x: 3 },
	block: [
		{ y: 2, x: 2, mini: "2-9" },
		{ y: 4, x: 6, color: "pink" }
	],
	walls: [
		[{ "key": "NE" }, { "key": "N" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NW" }],
		[{ "key": "E" }, { "key": "W","sub":["NW-NE"] }, {}, {}, {}, {}, {}, {}, { "key": "WE","sub":["NE-NW"] }],
		[{ "key": "E" }, { "key": "W" }, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "E" }, { "key": "W" }, {}, {}, {}, {}, {}, {}, { "key": "WSE" }],
		[{ "key": "E" }, { "key": "W" }, {}, { "key": "NSE" }, { "key": "NW" }, {}, {}, {}, {}],
		[{ "key": "E" }, { "key": "W" }, {}, {}, { "key": "WE","sub":["NE-NW"] }, {}, {}, {}, { "key": "NWE" }],
		[{ "key": "E" }, { "key": "W" }, {}, { "key": "NSE" }, { "key": "F","sub":["NE-WS"] }, { "key": "N","sub":["NE-ES"] }, { "key": "N" }, { "key": "N" }, { "key": "W","sub":["NE-WS"] }],
		[{ "key": "E" }, { "key": "W" }, {}, {}, { "key": "E","sub":["NE-NW"] }, { "key": "F" }, { "key": "F" }, { "key": "F" }, { "key": "W" }],
		[{ "key": "SE" }, { "key": "S" }, { "key": "NS","sub":["NE-ES"] }, { "key": "NS" }, { "key": "S","sub":["NE-WS"] }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "WS" }]
	]
};
