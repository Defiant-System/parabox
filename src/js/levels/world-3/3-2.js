
Level["3-2"] = {
	grid: 9,
	bg: "#8d71cd",
	filter: "sepia(1) hue-rotate(212deg) saturate(1.85) brightness(0.85)",
	player: { y: 4, x: 6 },
	void: [
		{ y: 4, x: 1 },
		{ y: 4, x: 4 },
	],
	exit: { y: 6, x: 7 },
	block: [
		{ y: 3, x: 3, mini: "3-2.1" },
		{ y: 5, x: 3, mini: "3-2.2" },
	],
	walls: [
		[{ "key": "NE" }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "NW" }],
		[{ "key": "E" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "W" }],
		[{ "key": "WE","sub":["NW-NE"] }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE","sub":["NE-NW"] }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "E" }, { "key": "N","sub":["NE-ES"] }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "N" }, { "key": "W","sub":["NE-WS"] }],
		[{ "key": "SE" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "WS" }]
	]
};

Level["3-2.1"] = {
	grid: 3,
	bg: "#9f6e21",
	filter: "sepia(1) hue-rotate(-10deg) saturate(3) brightness(.95)",
	void: [{ y: 1, x: 1 }],
	block: [
		{ y: 2, x: 1, color: "blue" }
	],
	walls: [
		[{ "key": "NE" }, { "key": "NS" }, { "key": "NW" }],
		[{ "key": "WE","sub":["NW-NE"] }, {}, { "key": "WE","sub":["NE-NW"] }],
		[{ "key": "WSE" }, {}, { "key": "WSE" }],
	]
};

Level["3-2.2"] = {
	grid: 7,
	bg: "#1a7f4a",
	filter: "sepia(1) hue-rotate(75deg) saturate(2.25) brightness(.875)",
	walls: [
		[{ "key": "NE" }, { "key": "N" }, { "key": "N" }, { "key": "NS" }, { "key": "NS" }, { "key": "N" }, { "key": "NW" }],
		[{ "key": "E" }, { "key": "S" }, { "key": "WS","sub":["NW-NE"] }, {}, {}, { "key": "SE","sub":["NE-NW"] }, { "key": "W" }],
		[{ "key": "WE","sub":["NW-NE"] }, {}, {}, {}, {}, {}, { "key": "WSE","sub":["NE-NW"] }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}],
		[{ "key": "E" }, { "key": "NW","sub":["NE-ES"] }, {}, {}, {}, {}, { "key": "NWE" }],
		[{ "key": "E" }, { "key": "F" }, { "key": "N","sub":["NE-ES"] }, { "key": "NW" }, {}, {}, { "key": "WE" }],
		[{ "key": "SE" }, { "key": "S" }, { "key": "S" }, { "key": "S" }, { "key": "NS","sub":["NE-ES"] }, { "key": "NS" }, { "key": "WS","sub":["NE-WS"] }]
	]
};
