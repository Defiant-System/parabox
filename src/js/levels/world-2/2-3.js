
Level["2-3"] = {
	grid: 9,
	bg: "#51817c",
	filter: "sepia(1) hue-rotate(85deg) saturate(1.75) brightness(0.8)",
	player: { y: 4, x: 4 },
	void: [
		{ y: 1, x: 4 },
		{ y: 4, x: 1 },
		{ y: 4, x: 7 },
		{ y: 7, x: 4 },
	],
	block: [
		{ y: 3, x: 3, color: "pink" },
		{ y: 3, x: 5, mini: "2-3.1" },
		{ y: 5, x: 3, color: "pink" },
		{ y: 5, x: 5, color: "pink" },
	],
	walls: [
		[{ "key": "NE" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NW" }],
		[{ "key": "WE","sub":["NW-NE"] }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE","sub":["NE-NW"] }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "SE" }, { "key": "NS","sub":["NE-ES"] }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "WS","sub":["NE-WS"] }]
	]
};

Level["2-3.1"] = {
	grid: 3,
	bg: "#1f692f",
	filter: "sepia(1) hue-rotate(75deg) saturate(3) brightness(.9)",
	exit: { y: 1, x: 1 },
	walls: [
		[{ key: "NE" }, { key: "NS" }, { key: "NWS" }],
		[{ key: "WE","sub":["NW-NE"] }, {}, {}],
		[{ key: "SE" }, { key: "NS","sub":["NE-ES"] }, { key: "NWS" }],
	]
};
