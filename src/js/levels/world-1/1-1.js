
Level["1-1"] = {
	grid: 7,
	bg: "#9b4894",
	filter: "sepia(1) hue-rotate(255deg) saturate(1.5) brightness(0.75)",
	player: { y: 3, x: 3 },
	exit: { y: 1, x: 1 },
	void: [
		{ y: 1, x: 4 },
		{ y: 4, x: 5 },
		{ y: 5, x: 3 },
	],
	block: [
		{ y: 3, x: 2, color: "yellow" },
		{ y: 3, x: 4, color: "yellow" },
		{ y: 5, x: 3, color: "yellow" },
	],
	walls: [
		[{ "key": "NE" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NW" }],
		[{ "key": "WE","sub":["NW-NE"] }, {}, {}, {}, {}, {}, { "key": "WE","sub":["NE-NW"] }],
		[{ "key": "WE" }, {}, { "key": "NWSE" }, {}, { "key": "NWSE" }, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, { "key": "NWSE" }, {}, { "key": "NWSE" }, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "SE" }, { "key": "NS","sub":["NE-ES"] }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "WS","sub":["NE-WS"] }]
	]
};
