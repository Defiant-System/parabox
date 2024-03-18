
Level["2-8"] = {
	grid: 7,
	bg: "#9d63b1",
	filter: "sepia(1) hue-rotate(255deg) saturate(2) brightness(0.8)",
	player: { y: 1, x: 3 },
	void: [{ y: 5, x: 1 }],
	exit: { y: 1, x: 1 },
	block: [
		{ y: 3, x: 5, mini: "2-8" },
	],
	walls: [
		[{ "key": "NE" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NW" }],
		[{ "key": "WE","sub":["NW-NE"] }, {}, {}, {}, {}, {}, { "key": "WE","sub":["NE-NW"] }],
		[{ "key": "WSE" }, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "NE" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NWS" }, {}, { "key": "WE" }],
		[{ "key": "WE","sub":["NW-NE"] }, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "SE" }, { "key": "NS","sub":["NE-ES"] }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "WS","sub":["NE-WS"] }]
	]
};
