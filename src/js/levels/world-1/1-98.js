
Level["1-98"] = {
	grid: 9,
	bg: "#687b47",
	filter: "sepia(.5) brightness(.8) hue-rotate(90deg) saturate(4)",
	player: { y: 4, x: 6 }, // vert
	// player: { y: 3, x: 7 }, // hori
	block: [
		{ y: 3, x: 6, mini: "1-98.1" },
		// { y: 3, x: 6, mini: "1-98.2" },
		// { y: 3, x: 6, mini: "1-98.3" },
	],
	walls: [
		[{ "key": "NE" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NW" }],
		[{ "key": "WE","sub":["NW-NE"] }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE","sub":["NE-NW"] }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "SE" }, { "key": "NS","sub":["NE-ES"] }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "WS","sub":["NE-WS"] }]
	]
};

Level["1-98.1"] = {
	grid: 5,
	bg: "#11664a",
	filter: "sepia(1) hue-rotate(75deg) saturate(2) brightness(.65)",
	walls: [
		[{ "key": "NE" }, { "key": "NW" }, {}, { "key": "NE" }, { "key": "NW" }],
		[{ "key": "SE" }, { "key": "WS" }, {}, { "key": "SE" }, { "key": "WS" }],
		[{}, {}, {}, {}, {}],
		[{ "key": "NE" }, { "key": "NW" }, {}, { "key": "NE" }, { "key": "NW" }],
		[{ "key": "SE" }, { "key": "WS" }, {}, { "key": "SE" }, { "key": "WS" }]
	]
};


Level["1-98.2"] = {
	grid: 3,
	bg: "#940",
	filter: "sepia(1) hue-rotate(315deg) saturate(2) brightness(.75)",
	walls: [
		[{ "key": "NWSE" }, {}, { "key": "NWSE" }],
		[{}, {}, {}],
		[{ "key": "NWSE" }, {}, { "key": "NWSE" }]
	]
};

Level["1-98.3"] = {
	grid: 7,
	bg: "#369",
	filter: "sepia(1) hue-rotate(145deg) saturate(1.5) brightness(0.75)",
	walls: [
		[{ "key": "NE" }, { "key": "NS" }, { "key": "NWS" }, {}, { "key": "NSE" }, { "key": "NS" }, { "key": "NW" }],
		[{ "key": "WE","sub":["NW-NE"] }, {}, {}, {}, {}, {}, { "key": "WE","sub":["NE-NW"] }],
		[{ "key": "WSE" }, {}, {}, {}, {}, {}, { "key": "WSE" }],
		[{}, {}, {}, {}, {}, {}, {}],
		[{ "key": "NWE" }, {}, {}, {}, {}, {}, { "key": "NWE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "SE" }, { "key": "NS","sub":["NE-ES"] }, { "key": "NWS" }, {}, { "key": "NSE" }, { "key": "NS" }, { "key": "WS","sub":["NE-WS"] }]
	]
};

