
Level["fit-5"] = {
	bg: "#272",
	filter: "sepia(1) hue-rotate(65deg) saturate(1.15) brightness(.8)",
	player: { y: 3, x: 1 },
	exit: null,
	void: [],
	block: [
		{ y: 1, x: 1, mini: "fit-5.5" },
		{ y: 1, x: 2, mini: "fit-5.4" },
		{ y: 1, x: 3, mini: "fit-5.3" },
	],
	walls: [
		[{ key: "NSE" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NWS" }],
		[{}, {}, {}, {}, {}],
		[{}, {}, {}, {}, {}],
		[{ key: "NWE" }, {}, {}, {}, { key: "NWE" }],
		[{ key: "SE" }, { key: "NS", sub: ["NE-ES"] }, { key: "NS" }, { key: "NS" }, { key: "WS", sub: ["NE-WS"] }],
	]
};

Level["fit-5.5"] = {
	bg: "#24a",
	filter: "sepia(1) hue-rotate(175deg) saturate(1.75) brightness(.8)",
	walls: [
		[{ key: "NE" }, { key: "NS" }, { key: "NS" }, { key: "NS" }, { key: "NW" }],
		[{ key: "WE", sub: ["NW-NE"] }, {}, {}, {}, { key: "WE", sub: ["NE-NW"] }],
		[{ key: "WE" }, {}, {}, {}, { key: "WE" }],
		[{ key: "WE" }, {}, {}, {}, { key: "WE" }],
		[{ key: "SE" }, { key: "NWS", sub: ["NE-ES"] }, {}, { key: "NSE" }, { key: "WS", sub: ["NE-WS"] }],
	]
};

Level["fit-5.4"] = {
	bg: "#829",
	filter: "sepia(1) hue-rotate(245deg) saturate(1.5) brightness(.85)",
	walls: [
		[{ key: "NSE" }, { key: "NS" }, { key: "NS" }, { key: "NW" }],
		[{}, {}, {}, { key: "WE", sub: ["NE-NW"] }],
		[{}, {}, {}, { key: "WE" }],
		[{ key: "NSE" }, { key: "NWS" }, {}, { key: "WSE" }],
	]
};

Level["fit-5.3"] = {
	bg: "#829",
	filter: "sepia(1) hue-rotate(245deg) saturate(1.5) brightness(.85)",
	walls: [
		[{ key: "NSE" }, { key: "NS" }, { key: "NW" }],
		[{}, {}, { key: "WE", sub: ["NE-NW"] }],
		[{ key: "NWSE" }, {}, { key: "WSE" }],
	]
};
