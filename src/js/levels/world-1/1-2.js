
Level["1-2"] = {
	grid: 9,
	bg: "#151",
	filter: "sepia(1) hue-rotate(75deg) saturate(1.25) brightness(0.85)",
	// player: { y: 6, x: 4 },
	player: { y: 2, x: 4 },
	exit: { y: 7, x: 4 },
	void: [{ y: 7, x: 2 }, { y: 7, x: 6 }],
	block: [
		{ y: 3, x: 4, color: "brown" },
		{ y: 4, x: 4, color: "brown" }
	],
	walls: [
		[{ key: "NE" }, { key: "N" }, { key: "N" }, { key: "N" }, { key: "N" }, { key: "N" }, { key: "N" }, { key: "N" }, { key: "NW" }],
		[{ key: "E" }, { key: "F" }, { key: "S" }, { key: "S" }, { key: "S" }, { key: "F" }, { key: "F" }, { key: "F" }, { key: "W" }],
		[{ key: "E" }, { key: "W", sub: ["NW-NE"] }, {}, {}, {}, { key: "SE", sub: ["NE-NW"] }, { key: "S" }, { key: "F" }, { key: "W" }],
		[{ key: "E" }, { key: "W" }, {}, { key: "NWE" }, {}, {}, {}, { key: "E", sub: ["NE-NW"] }, { key: "W" }],
		[{ key: "E" }, { key: "W" }, {}, { key: "WSE" }, {}, {}, {}, { key: "E" }, { key: "W" }],
		[{ key: "E" }, { key: "W" }, {}, {}, {}, {}, {}, { key: "E" }, { key: "W" }],
		[{ key: "E" }, { key: "W" }, {}, {}, {}, {}, {}, { key: "E" }, { key: "W" }],
		[{ key: "E" }, { key: "W" }, {}, {}, {}, {}, {}, { key: "E" }, { key: "W" }],
		[{ key: "SE" }, { key: "S" }, { key: "NS", sub: ["NE-ES"] }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "S", sub: ["NE-WS"] }, { key: "WS" }],
	]
};
