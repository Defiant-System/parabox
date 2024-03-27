
Level["1-99"] = {
	grid: 9,
	bg: "#626262",
	filter: "none",
	player: { y: 4, x: 4 },
	exit: { y: 3, x: 6 },
	void: [{ y: 5, x: 4 }],
	block: [{ y: 5, x: 4, mini: "1-99.1" }],
	walls: [
		[{ key: "NE" }, { key: "N" }, { key: "N" }, { key: "N" }, { key: "N" }, { key: "N" }, { key: "N" }, { key: "N" }, { key: "NW" }],
		[{ key: "E" }, { key: "F" }, { key: "F" }, { key: "F" }, { key: "F" }, { key: "F" }, { key: "F" }, { key: "F" }, { key: "W" }],
		[{ key: "E" }, { key: "S" }, { key: "S" }, { key: "S" }, { key: "S" }, { key: "F" }, { key: "S" }, { key: "S" }, { key: "W" }],
		[{ key: "WE", sub: ["NW-NE"] }, {}, {}, {}, {}, { key: "WE", sub: ["NW-NE", "NE-NW"] }, {}, {}, { key: "WE", sub: ["NE-NW"] }],
		[{ key: "WE" }, {}, {}, {}, {}, { key: "WSE" }, {}, {}, { key: "WE" }],
		[{ key: "WE" }, {}, {}, {}, {}, {}, {}, {}, { key: "WE" }],
		[{ key: "WE" }, {}, {}, {}, { key: "NE" }, { key: "N" }, { key: "N" }, { key: "N" }, { key: "W", sub: ["NE-WS"] }],
		[{ key: "E" }, { key: "N", sub: ["NE-ES"] }, { key: "N" }, { key: "N" }, { key: "F", sub: ["NE-WS"] }, { key: "F" }, { key: "F" }, { key: "F" }, { key: "W" }],
		[{ key: "SE" }, { key: "S" }, { key: "S" }, { key: "S" }, { key: "S" }, { key: "S" }, { key: "S" }, { key: "S" }, { key: "WS" }],
	]
};

Level["1-99.1"] = {
	grid: 3,
	bg: "#339",
	filter: "sepia(1) hue-rotate(195deg) saturate(2) brightness(.75)",
	walls: [
		[{ key: "NWE" }, {}, { key: "NWSE" }],
		[{ key: "WE" }, {}, {}],
		[{ key: "SE" }, { key: "NS", sub: ["NE-ES"] }, { key: "NWS" }],
	]
};
