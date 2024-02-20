
Level[1] = {
	grid: 7,
	bg: "#369",
	filter: "sepia(1) hue-rotate(145deg) saturate(1.5) brightness(0.75)",
	player: { y: 3, x: 1 },
	exit: { y: 1, x: 1 },
	void: [{ y: 5, x: 5 }],
	block: [{ y: 3, x: 4, color: "yellow" }],
	walls: [
		[{ "key": "NE" }, { "key": "N" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "N" }, { "key": "NW" }],
		[{ "key": "E" }, { "key": "W","sub":["NW-NE"] }, {}, {}, {}, {}, {}, { "key": "E","sub":["NE-NW"] }, { "key": "W" }],
		[{ "key": "E" }, { "key": "W" }, {}, {}, {}, {}, {}, { "key": "E" }, { "key": "W" }],
		[{ "key": "E" }, { "key": "W" }, {}, {}, {}, {}, {}, { "key": "E" }, { "key": "W" }],
		[{ "key": "E" }, { "key": "W" }, {}, {}, {}, {}, {}, { "key": "E" }, { "key": "W" }],
		[{ "key": "E" }, { "key": "W" }, {}, { "key": "NSE" }, { "key": "NS" }, { "key": "NS" }, { "key": "N" }, { "key": "F","sub":["NE-WS"] }, { "key": "W" }],
		[{ "key": "E" }, { "key": "W" }, {}, {}, {}, {}, { "key": "E","sub":["NE-NW"] }, { "key": "F" }, { "key": "W" }],
		[{ "key": "E" }, { "key": "W" }, {}, {}, {}, {}, { "key": "E" }, { "key": "F" }, { "key": "W" }],
		[{ "key": "SE" }, { "key": "S" }, { "key": "NS","sub":["NE-ES"] }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "S","sub":["NE-WS"] }, { "key": "S" }, { "key": "WS" }]
	]
};

