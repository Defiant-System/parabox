
Level[3] = {
	grid: 9,
	bg: "#369",
	filter: "sepia(1) hue-rotate(35deg) saturate(1.5) brightness(0.75)",
	player: { y: 4, x: 2 },
	exit: { y: 2, x: 2 },
	void: [{ y: 2, x: 3 }],
	block: [{ y: 2, x: 4, color: "green" }],
	walls: [
		[{ key: "NE" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "N" }, { key: "N" }, { key: "N" }, { key: "NW" }],
		[{ key: "WE", sub: ["NW-NE"] }, {}, {}, {}, {}, { key: "E", sub: ["NE-NW"] }, { key: "F" }, { key: "F" }, { key: "W" }],
		[{ key: "WE" }, {}, {}, {}, {}, { key: "E" }, { key: "F" }, { key: "F" }, { key: "W" }],
		[{ key: "WE" }, {}, {}, {}, {}, { key: "E" }, { key: "F" }, { key: "F" }, { key: "W" }],
		[{ key: "WE" }, {}, {}, {}, {}, { key: "SE" }, { key: "S" }, { key: "S" }, { key: "W" }],
		[{ key: "WE" }, {}, {}, {}, {}, {}, {}, {}, { key: "WE", sub: ["NE-NW"] }],
		[{ key: "WE" }, {}, {}, { key: "NE" }, { key: "NW" }, {}, {}, {}, { key: "WE" }],
		[{ key: "E" }, { key: "N", sub: ["NE-ES"] }, { key: "N" }, { key: "F", sub: ["NE-WS"] }, { key: "F" }, { key: "N", sub: ["NE-ES"] }, { key: "N" }, { key: "N" }, { key: "W", sub: ["NE-WS"] }],
		[{ key: "SE" }, { key: "S" }, { key: "S" }, { key: "S" }, { key: "S" }, { key: "S" }, { key: "S" }, { key: "S" }, { key: "WS" }],
	]
};
