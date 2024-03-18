
Level["1-99"] = {
	grid: 9,
	bg: "#833",
	filter: "sepia(.5) brightness(.8) hue-rotate(320deg) saturate(4)",
	player: { y: 3, x: 5 },
	exit: { y: 6, x: 4 },
	void: [{ y: 1, x: 6 }, { y: 6, x: 6 }],
	block: [
		{ y: 4, x: 2, color: "yellow" },
		{ y: 3, x: 6, mini: "1-99.1" },
		{ y: 5, x: 2, mini: "1-99.2" },
	],
	walls: [
		[{ key: "NE" }, { key: "N" }, { key: "N" }, { key: "N" }, { key: "N" }, { key: "N" }, { key: "NS" }, { key: "N" }, { key: "NW" }],
		[{ key: "E" }, { key: "F" }, { key: "F" }, { key: "F" }, { key: "F" }, { key: "W", sub: ["NW-NE"] }, {}, { key: "E", sub: ["NE-NW"] }, { key: "W" }],
		[{ key: "E" }, { key: "S" }, { key: "S" }, { key: "S" }, { key: "S" }, { key: "WS" }, {}, { key: "E" }, { key: "W" }],
		[{ key: "WE", sub: ["NW-NE"] }, {}, {}, {}, {}, {}, {}, { key: "E" }, { key: "W" }],
		[{ key: "WE" }, {}, {}, { key: "NE" }, { key: "N" }, { key: "NW" }, {}, { key: "E" }, { key: "W" }],
		[{ key: "E" }, { key: "NWS", sub: ["NE-ES"] }, {}, { key: "E" }, { key: "S" }, { key: "WS" }, {}, { key: "E" }, { key: "W" }],
		[{ key: "WE", sub: ["NW-NE"] }, {}, {}, { key: "WE", sub: ["NW-NE"] }, {}, {}, {}, { key: "E" }, { key: "W" }],
		[{ key: "WE" }, {}, {}, { key: "E" }, { key: "N", sub: ["NE-ES"] }, { key: "N" }, { key: "N" }, { key: "F", sub: ["NE-WS"] }, { key: "W" }],
		[{ key: "SE" }, { key: "NS", sub: ["NE-ES"] }, { key: "NS" }, { key: "S", sub: ["NE-WS"] }, { key: "S" }, { key: "S" }, { key: "S" }, { key: "S" }, { key: "WS" }],
	]
};

Level["1-99.1"] = {
	grid: 5,
	bg: "#136",
	filter: "sepia(1) hue-rotate(175deg) saturate(2) brightness(.65)",
	walls: [
		[{ key: "NE" }, { key: "NW" }, {}, { key: "NE" }, { key: "NW" }],
		[{ key: "SE" }, { key: "WS" }, {}, { key: "E" }, { key: "W" }],
		[{}, {}, {}, { key: "E" }, { key: "W" }],
		[{ key: "NWE" }, {}, {}, { key: "E" }, { key: "W" }],
		[{ key: "SE" }, { key: "NS", sub: ["NE-ES"] }, { key: "NS" }, { key: "S", sub: ["NE-WS"] }, { key: "WS" }],
	]
};


Level["1-99.2"] = {
	grid: 3,
	bg: "#136",
	filter: "sepia(1) hue-rotate(175deg) saturate(2) brightness(.65)",
	walls: [
		[{ key: "NWE" }, {}, { key: "NWSE" }],
		[{ key: "WE" }, {}, {}],
		[{ key: "SE" }, { key: "NS", sub: ["NE-ES"] }, { key: "NWS" }],
	]
};
