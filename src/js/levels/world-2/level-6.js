
Level["2-6"] = {
	grid: 9,
	bg: "#37719a",
	filter: "sepia(1) hue-rotate(165deg) saturate(2.5) brightness(0.85)",
	player: { y: 3, x: 2 },
	void: [{ y: 1, x: 7 }],
	exit: { y: 2, x: 3 },
	block: [
		{ y: 5, x: 4, mini: "2-6" }
	],
	walls: [
		[{ "key": "NE" }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NW" }],
		[{ "key": "E" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "W","sub":["NW-NE"] }, {}, {}, {}, { "key": "WE","sub":["NE-NW"] }],
		[{ "key": "WE","sub":["NW-NE"] }, {}, {}, {}, { "key": "E","sub":["NE-NW"] }, { "key": "NW","sub":["NE-ES"] }, {}, { "key": "NE" }, { "key": "W","sub":["NE-WS"] }],
		[{ "key": "WSE" }, {}, {}, {}, { "key": "E" }, { "key": "W" }, {}, { "key": "E" }, { "key": "W" }],
		[{}, {}, {}, {}, { "key": "SE" }, { "key": "WS" }, {}, { "key": "E" }, { "key": "W" }],
		[{ "key": "NWE" }, {}, {}, {}, {}, {}, {}, { "key": "E" }, { "key": "W" }],
		[{ "key": "WE" }, {}, {}, {}, { "key": "NSE" }, { "key": "NW" }, {}, { "key": "E" }, { "key": "W" }],
		[{ "key": "WE" }, {}, {}, {}, {}, { "key": "E","sub":["NE-NW"] }, { "key": "N","sub":["NE-ES"] }, { "key": "F","sub":["NE-WS"] }, { "key": "W" }],
		[{ "key": "SE" }, { "key": "NS","sub":["NE-ES"] }, { "key": "NS" }, { "key": "NWS" }, {}, { "key": "SE" }, { "key": "S" }, { "key": "S" }, { "key": "WS" }]
	]
};
