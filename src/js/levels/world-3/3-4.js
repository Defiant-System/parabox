
Level["3-4"] = {
	grid: 9,
	bg: "#4e5a9ca8",
	filter: "sepia(1) hue-rotate(180deg) saturate(1.95) brightness(0.75)",
	player: { y: 2, x: 2 },
	void: [
		{ y: 3, x: 4 },
		{ y: 5, x: 4 },
		{ y: 4, x: 3 },
		{ y: 4, x: 5 },
	],
	exit: { y: 4, x: 4 },
	block: [
		{ y: 2, x: 4, color: "brown" },
		{ y: 2, x: 6, color: "blue" },
		{ y: 4, x: 2, color: "yellow" },
		{ y: 4, x: 6, color: "yellow" },
		{ y: 6, x: 2, color: "blue" },
		{ y: 6, x: 4, color: "brown" },
		{ y: 6, x: 6, mini: "3-4.1" }
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

Level["3-4.1"] = {
	grid: 3,
	bg: "#3f7ac6",
	filter: "sepia(1) hue-rotate(165deg) saturate(2) brightness(.8)",
	walls: [
		[{ "key": "NE" }, { "key": "NS" }, { "key": "NWS" }],
		[{ "key": "WE","sub":["NW-NE"] }, {}, {}],
		[{ "key": "WSE" }, {}, { "key": "NWSE" }],
	]
};
