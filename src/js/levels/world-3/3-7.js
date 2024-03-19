
Level["3-7"] = {
	grid: 9,
	bg: "#016c55db",
	filter: "sepia(1) hue-rotate(115deg) saturate(1.35) brightness(.7)",
	player: { y: 6, x: 3 },
	void: [
		{ y: 4, x: 2 },
		{ y: 5, x: 2 }
	],
	exit: { y: 6, x: 2 },
	block: [
		{ y: 3, x: 4, color: "yellow" },
		{ y: 3, x: 2, mini: "3-7" }
	],
	walls: [
		[{ "key": "NE" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "N" }, { "key": "NS" }, { "key": "NS" }, { "key": "NW" }],
		[{ "key": "WE","sub":["NW-NE"] }, {}, {}, {}, {}, { "key": "WE","sub":["NE-NW","NW-NE"] }, {}, {}, { "key": "WE","sub":["NE-NW"] }],
		[{ "key": "WE" }, {}, {}, {}, {}, { "key": "WSE" }, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, { "key": "NWE" }, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, { "key": "WE" }, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, { "key": "NSE" }, { "key": "W","sub":["NE-WS"] }, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, { "key": "E","sub":["NE-NW"] }, { "key": "N","sub":["NE-ES"] }, { "key": "N" }, { "key": "W","sub":["NE-WS"] }],
		[{ "key": "SE" }, { "key": "NS","sub":["NE-ES"] }, { "key": "NS" }, { "key": "NWS" }, {}, { "key": "SE" }, { "key": "S" }, { "key": "S" }, { "key": "WS" }]
	]
};
