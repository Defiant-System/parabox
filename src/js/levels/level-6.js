
Level[6] = {
	bg: "#626262",
	filter: "none",
	player: { y: 3, x: 7 },
	exit: { y: 3, x: 6 },
	void: [{ y: 5, x: 4 }],
	block: [{ y: 5, x: 2, mini: 5.1 }],
	walls: [
		[{ key: "NE" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NW" }],
		[{ key: "WE", sub: ["NW-NE"] }, {}, {}, {}, {}, {}, {}, {}, {}, {}, { key: "WE", sub: ["NE-NW"] }],
		[{ key: "WE" }, {}, {}, {}, {}, {}, {}, {}, {}, {}, { key: "WE" }],
		[{ key: "WE" }, {}, {}, {}, {}, {}, {}, {}, {}, {}, { key: "WE" }],
		[{ key: "WE" }, {}, {}, {}, {}, {}, {}, {}, {}, {}, { key: "WE" }],
		[{ key: "WE" }, {}, {}, {}, {}, {}, {}, {}, {}, {}, { key: "WE" }],
		[{ key: "WE" }, {}, {}, {}, {}, {}, {}, {}, {}, {}, { key: "WE" }],
		[{ key: "WE" }, {}, {}, {}, {}, {}, {}, {}, {}, {}, { key: "WE" }],
		[{ key: "WE" }, {}, {}, {}, {}, {}, {}, {}, {}, {}, { key: "WE" }],
		[{ key: "WE" }, {}, {}, {}, {}, {}, {}, {}, {}, {}, { key: "WE" }],
		[{ key: "SE" }, { key: "NS", sub: ["NE-ES"] }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "WS", sub: ["NE-WS"] }],
	]
};

Level[6.1] = {
	bg: "#339",
	filter: "sepia(1) hue-rotate(195deg) saturate(2) brightness(.75)",
	walls: [
		[{ key: "NWE" }, {}, { key: "NWSE" }],
		[{ key: "WE" }, {}, {}],
		[{ key: "SE" }, { key: "NS" }, { key: "NWS" }],
	]
};
