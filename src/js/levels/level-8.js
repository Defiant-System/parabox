
Level[8] = {
	bg: "#829",
	filter: "sepia(1) hue-rotate(245deg) saturate(1.5) brightness(.85)",
	player: { y: 1, x: 1 },
	exit: { y: 2, x: 1 },
	void: [{ y: 2, x: 2 }],
	block: [{ y: 1, x: 2, color: "yellow" }],
	walls: [
		[{ key: "NSE" }, { key: "NS" }, { key: "NS" }, { key: "NW" }],
		[{}, {}, {}, { key: "WE", sub: ["NE-NW"] }],
		[{ key: "NWE" }, {}, {}, { key: "WE" }],
		[{ key: "SE" }, { key: "NWS", sub: ["NE-ES"] }, {}, { key: "WSE" }],
	]
};
