
Level["3-1"] = {
	grid: 9,
	bg: "#848484",
	filter: "sepia(1) saturate(0) brightness(0.9)",
	player: { y: 3, x: 4 },
	void: [{ y: 5, x: 4 }],
	exit: { y: 5, x: 6 },
	block: [
		{ y: 3, x: 6, mini: "3-1.1" },
		{ y: 1, x: 2, color: "gray" }
	],
	walls: [
		[{ "key": "NE" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NW" }],
		[{ "key": "WE","sub":["NW-NE"] }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE","sub":["NE-NW"] }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "E" }, { "key": "N","sub":["NE-ES"] }, { "key": "NW" }, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "E" }, { "key": "F" }, { "key": "W" }, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "E" }, { "key": "F" }, { "key": "W" }, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "E" }, { "key": "F" }, { "key": "W" }, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "E" }, { "key": "F" }, { "key": "W" }, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "SE" }, { "key": "S" }, { "key": "S" }, { "key": "NS","sub":["NE-ES"] }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "WS","sub":["NE-WS"] }]
	]
};

Level["3-1.1"] = {
	grid: 3,
	bg: "#3f7ac6",
	filter: "sepia(1) hue-rotate(165deg) saturate(2) brightness(.8)",
	void: [{ y: 1, x: 1 }],
	block: [
		{ y: 2, x: 1, color: "gray" }
	],
	walls: [
		[{ "key": "NE" }, { "key": "NS" }, { "key": "NW" }],
		[{ "key": "WE","sub":["NW-NE"] }, {}, { "key": "WE","sub":["NE-NW"] }],
		[{ "key": "WSE" }, {}, { "key": "WSE" }],
	]
};
