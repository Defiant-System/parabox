
Level["2-7"] = {
	grid: 9,
	bg: "#57923a",
	filter: "sepia(1) hue-rotate(75deg) saturate(1.5) brightness(0.85)",
	player: { y: 5, x: 4 },
	void: [{ y: 4, x: 7 }],
	exit: { y: 3, x: 3 },
	block: [
		{ y: 6, x: 7, mini: "2-7" }
	],
	walls: [
		[{ "key": "NE" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NW" }],
		[{ "key": "WE","sub":["NW-NE"] }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE","sub":["NE-NW"] }],
		[{ "key": "WE" }, {}, { "key": "NE" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NWS" }, {}, { "key": "WE" }],
		[{ "key": "WSE" }, {}, { "key": "WE","sub":["NW-NE"] }, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{}, {}, { "key": "WE" }, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "NE" }, { "key": "NS" }, { "key": "WS","sub":["NE-WS"] }, {}, {}, {}, { "key": "NWE" }, {}, { "key": "WE" }],
		[{ "key": "WE","sub":["NW-NE"] }, {}, {}, {}, {}, {}, { "key": "WE" }, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, { "key": "WE" }, {}, { "key": "WE" }],
		[{ "key": "SE" }, { "key": "NS","sub":["NE-ES"] }, { "key": "NS" }, { "key": "NWS" }, {}, { "key": "NSE" }, { "key": "S","sub":["NE-WS"] }, { "key": "NS","sub":["NE-ES"] }, { "key": "WS","sub":["NE-WS"] }]
	]
};
