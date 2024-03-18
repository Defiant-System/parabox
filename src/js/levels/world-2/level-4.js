
Level["2-4"] = {
	grid: 7,
	bg: "#2d746c",
	filter: "sepia(1) hue-rotate(85deg) saturate(1.75) brightness(0.8)",
	player: { y: 4, x: 4 },
	block: [
		{ y: 2, x: 2, mini: "2-4.1" },
		{ y: 2, x: 4, mini: "2-4.2" },
		{ y: 4, x: 2, mini: "2-4.3" },
	],
	walls: [
		[{ "key": "NE" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NW" }],
		[{ "key": "WE","sub":["NW-NE"] }, {}, {}, {}, {}, {}, { "key": "WE","sub":["NE-NW"] }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "WE" }, {}, {}, {}, {}, {}, { "key": "WE" }],
		[{ "key": "SE" }, { "key": "NS","sub":["NE-ES"] }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "WS","sub":["NE-WS"] }]
	]
};

Level["2-4.1"] = {
	grid: 3,
	bg: "#c6823f",
	filter: "sepia(1) hue-rotate(325deg) saturate(2) brightness(.7)",
	void: [{ y: 1, x: 1 }],
	walls: [
		[{ key: "NE" }, { key: "NS" }, { key: "NWS" }],
		[{ key: "WE", "sub":["NW-NE"] }, {}, {}],
		[{ key: "SE" }, { key: "NS","sub":["NE-ES"] }, { key: "NWS" }],
	]
};

Level["2-4.2"] = {
	grid: 3,
	bg: "#c6823f",
	filter: "sepia(1) hue-rotate(325deg) saturate(2) brightness(.7)",
	void: [{ y: 1, x: 1 }],
	walls: [
		[{ key: "NE" }, { key: "NS" }, { key: "NWS" }],
		[{ key: "WE", "sub":["NW-NE"] }, {}, {}],
		[{ key: "SE" }, { key: "NS","sub":["NE-ES"] }, { key: "NWS" }],
	]
};

Level["2-4.3"] = {
	grid: 5,
	bg: "#8d3fc6",
	filter: "sepia(1) hue-rotate(215deg) saturate(2) brightness(.9)",
	exit: { y: 2, x: 1 },
	walls: [
		[{ "key": "NE" }, { "key": "NS" }, { "key": "NS" }, { "key": "NS" }, { "key": "NW" }],
		[{ "key": "WE","sub":["NW-NE"] }, {}, {}, {}, { "key": "WSE","sub":["NE-NW"] }],
		[{ "key": "WE" }, {}, {}, {}, {}],
		[{ "key": "WE" }, {}, {}, {}, { "key": "NWE" }],
		[{ "key": "SE" }, { "key": "NS","sub":["NE-ES"] }, { "key": "NS" }, { "key": "NS" }, { "key": "WS","sub":["NE-WS"] }],
	]
};
