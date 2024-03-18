
Level["98-3"] = {
	grid: 3,
	bg: "#272",
	filter: "sepia(1) hue-rotate(65deg) saturate(1.15) brightness(.8)",
	exit: null,
	// player: { y: 1, x: 0 },
	void: [],
	block: [
		{ y: 0, x: 0, mini: "99-4" },

		// { y: 0, x: 2, mini: "99-5" },
		// { y: 2, x: 0, mini: "99-7" },
		// { y: 2, x: 2, mini: "99-11" },
	],
	walls: [
		[{ key: "NSE" }, { key: "NS" }, { key: "NWS" }],
		[{}, {}, {}],
		[{}, {}, {}],
	]
};

Level["98-4"] = {
	grid: 4,
	bg: "#272",
	filter: "sepia(1) hue-rotate(65deg) saturate(1.15) brightness(.8)",
	// player: { y: 1, x: 1 },
	exit: null,
	void: [],
	block: [
		{ y: 0, x: 0, mini: "99-3" },
	],
	walls: [
		[{ key: "NSE" }, { key: "NS" }, { key: "NS" }, { key: "NWS" }],
		[{}, {}, {}, {}],
		[{ key: "NWE" }, {}, {}, {}],
		[{ key: "SE" }, { key: "NS", sub: ["NE-ES"] }, { key: "NS" }, { key: "NWS" }],
	]
};

Level["98-5"] = {
	grid: 5,
	bg: "#272",
	filter: "sepia(1) hue-rotate(65deg) saturate(1.15) brightness(.8)",
	// player: { y: 1, x: 1 },
	exit: null,
	void: [],
	block: [{ y: 1, x: 3, mini: "99-3" }],
	walls: [
		[{ key: "NSE" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NWS" }],
		[{}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}],
		[{ key: "NWE" }, {}, {}, {}, { key: "NWE" }],
		[{ key: "SE" }, { key: "NS", sub: ["NE-ES"] }, { key: "NS" }, { key: "NS" }, { key: "WS", sub: ["NE-WS"] }],
	]
};

Level["98-7"] = {
	grid: 7,
	bg: "#272",
	filter: "sepia(1) hue-rotate(65deg) saturate(1.15) brightness(.8)",
	// player: { y: 1, x: 1 },
	exit: null,
	void: [],
	block: [{ y: 1, x: 3, mini: "99-3" }],
	walls: [
		[{ key: "NSE" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NWS" }],
		[{}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}],
		[{ key: "NWE" }, {}, {}, {}, {}, {}, { key: "NWE" }],
		[{ key: "SE" }, { key: "NS", sub: ["NE-ES"] }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "WS", sub: ["NE-WS"] }],
	]
};

Level["98-9"] = {
	grid: 9,
	bg: "#272",
	filter: "sepia(1) hue-rotate(65deg) saturate(1.15) brightness(.8)",
	// player: { y: 1, x: 1 },
	exit: null,
	void: [],
	block: [{ y: 1, x: 3, mini: "99-3" }],
	walls: [
		[{ key: "NSE" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NWS" }],
		[{}, {}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}, {}],
		[{ key: "NWE" }, {}, {}, {}, {}, {}, {}, {}, { key: "NWE" }],
		[{ key: "SE" }, { key: "NS", sub: ["NE-ES"] }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "WS", sub: ["NE-WS"] }],
	]
};

Level["98-11"] = {
	grid: 11,
	bg: "#272",
	filter: "sepia(1) hue-rotate(65deg) saturate(1.15) brightness(.8)",
	// player: { y: 1, x: 1 },
	exit: null,
	void: [],
	block: [{ y: 1, x: 3, mini: "99-3" }],
	walls: [
		[{ key: "NSE" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NWS" }],
		[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
		[{ key: "NWE" }, {}, {}, {}, {}, {}, {}, {}, {}, {}, { key: "NWE" }],
		[{ key: "SE" }, { key: "NS", sub: ["NE-ES"] }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "WS", sub: ["NE-WS"] }],
	]
};
