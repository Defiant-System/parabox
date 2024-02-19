
Level["b3"] = {
	grid: 3,
	bg: "#272",
	filter: "sepia(1) hue-rotate(65deg) saturate(1.15) brightness(.8)",
	player: { y: 1, x: 0 },
	exit: null,
	void: [],
	block: [{ y: 1, x: 2, mini: "s3" }],
	walls: [
		[{ key: "NSE" }, { key: "NS" }, { key: "NWS" }],
		[{}, {}, {}],
		[{}, {}, {}],
	]
};

Level["b4"] = {
	grid: 4,
	bg: "#272",
	filter: "sepia(1) hue-rotate(65deg) saturate(1.15) brightness(.8)",
	player: { y: 1, x: 1 },
	exit: null,
	void: [],
	block: [{ y: 1, x: 3, mini: "s3" }],
	walls: [
		[{ key: "NSE" }, { key: "NS" }, { key: "NS" }, { key: "NWS" }],
		[{}, {}, {}, {}],
		[{ key: "NWE" }, {}, {}, { key: "NWE" }],
		[{ key: "SE" }, { key: "NS", sub: ["NE-ES"] }, { key: "NS" }, { key: "WS", sub: ["NE-WS"] }],
	]
};

Level["b5"] = {
	grid: 5,
	bg: "#272",
	filter: "sepia(1) hue-rotate(65deg) saturate(1.15) brightness(.8)",
	player: { y: 1, x: 1 },
	exit: null,
	void: [],
	block: [{ y: 1, x: 3, mini: "s3" }],
	walls: [
		[{ key: "NSE" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NWS" }],
		[{}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}],
		[{ key: "NWE" }, {}, {}, {}, { key: "NWE" }],
		[{ key: "SE" }, { key: "NS", sub: ["NE-ES"] }, { key: "NS" }, { key: "NS" }, { key: "WS", sub: ["NE-WS"] }],
	]
};
