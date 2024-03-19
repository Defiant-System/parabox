
Level["1-6"] = {
	grid: 11,
	bg: "#95a",
	filter: "sepia(1) hue-rotate(255deg) saturate(2) brightness(0.8)",
	player: { y: 5, x: 4 },
	exit: { y: 6, x: 9 },
	void: [{ y: 4, x: 6 }],
	block: [{ y: 4, x: 2, color1: "blue", mini: "1-6.1" }],
	walls: [
		[{ "key":"NE" }, { "key":"N" }, { "key":"N" }, { "key":"N" }, { "key":"N" }, { "key":"N" }, { "key":"N" }, { "key":"N" }, { "key":"N" }, { "key":"N" }, { "key":"NW" }],
		[{ "key":"E" }, { "key":"F" }, { "key":"S" }, { "key":"S" }, { "key":"S" }, { "key":"F" }, { "key":"F" }, { "key":"S" }, { "key":"F" }, { "key":"F" }, { "key":"W" }],
		[{ "key":"E" }, { "key":"W","sub":["NW-NE"] }, {}, {}, {}, { "key":"E","sub":["NE-NW"] }, { "key":"W","sub":["NW-NE"] }, {}, { "key":"SE","sub":["NE-NW"] }, { "key":"F" }, { "key":"W" }],
		[{ "key":"E" }, { "key":"W" }, {}, {}, {}, { "key":"E" }, { "key":"WS" }, {}, {}, { "key":"E","sub":["NE-NW"] }, { "key":"W" }],
		[{ "key":"E" }, { "key":"WS" }, {}, {}, {}, { "key":"WE","sub":["NW-NE"] }, {}, {}, {}, { "key":"E" }, { "key":"W" }],
		[{ "key":"WE","sub":["NW-NE"] }, {}, {}, {}, {}, { "key":"E" }, { "key":"NW","sub":["NE-ES"] }, {}, { "key":"NSE" }, { "key":"S","sub":["NE-WS"] }, { "key":"W" }],
		[{ "key":"E" }, { "key":"N","sub":["NE-ES"] }, { "key":"N" }, { "key":"NWS" }, {}, { "key":"SE" }, { "key":"WS" }, {}, {}, {}, { "key":"WE","sub":["NE-NW"] }],
		[{ "key":"E" }, { "key":"F" }, { "key":"W","sub":["NW-NE"] }, {}, {}, {}, {}, {}, { "key":"NWSE" }, {}, { "key":"WE" }],
		[{ "key":"E" }, { "key":"F" }, { "key":"F" }, { "key":"N","sub":["NE-ES"] }, { "key":"N" }, { "key":"N" }, { "key":"NW" }, {}, {}, {}, { "key":"WE" }],
		[{ "key":"E" }, { "key":"F" }, { "key":"F" }, { "key":"F" }, { "key":"F" }, { "key":"F" }, { "key":"F" }, { "key":"N","sub":["NE-ES"] }, { "key":"N" }, { "key":"N" }, { "key":"W","sub":["NE-WS"] }],
		[{ "key":"SE" }, { "key":"S" }, { "key":"S" }, { "key":"S" }, { "key":"S" }, { "key":"S" }, { "key":"S" }, { "key":"S" }, { "key":"S" }, { "key":"S" }, { "key":"WS" }]
	]
};

Level["1-6.1"] = {
	grid: 3,
	bg: "#339",
	filter: "sepia(1) hue-rotate(195deg) saturate(2) brightness(.75)",
	walls: [
		[{ key: "NWSE" }, {}, { key: "NWSE" }],
		[{}, {}, {}],
		[{ key: "NSE" }, { key: "NS" }, { key: "NWS" }],
	]
};
