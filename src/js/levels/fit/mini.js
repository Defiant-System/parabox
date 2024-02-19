
Level["m3"] = {
	grid: 3,
	bg: "#932",
	filter: "sepia(1) hue-rotate(345deg) saturate(1.85) brightness(.85)",
	walls: [
		[{ key: "NSE" }, { key: "NS" }, { key: "NW" }],
		[{}, {}, { key: "WE", sub: ["NE-NW"] }],
		[{ key: "NWSE" }, {}, { key: "WSE" }],
	]
};

Level["m4"] = {
	grid: 4,
	bg: "#829",
	filter: "sepia(1) hue-rotate(245deg) saturate(1.5) brightness(.85)",
	walls: [
		[{ key: "NSE" }, { key: "NS" }, { key: "NS" }, { key: "NW" }],
		[{}, {}, {}, { key: "WE", sub: ["NE-NW"] }],
		[{}, {}, {}, { key: "WE" }],
		[{ key: "NSE" }, { key: "NWS" }, {}, { key: "WSE" }],
	]
};

Level["m5"] = {
	grid: 5,
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

Level["m7"] = {
	grid: 7,
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

Level["m9"] = {
	grid: 9,
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

Level["m11"] = {
	grid: 11,
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
