let Anim = {
	init(canvas) {
		// initial values
		this.paused = false;

		// setTimeout(() => { this.paused = true }, 300);
	},
	dispatch(event) {
		let Self = Anim,
			value;
		switch (event.type) {
			case "start":
				Self.cvs = event.canvas;
				Self.ctx = Self.cvs.getContext("2d");
				Self.dispatch({ type: "create-scene" });
				Self.draw();
				break;
			case "stop":
			case "pause":
				Self.paused = true;
				break;
			case "resume":
				Self.paused = false;
				Self.draw();
				break;
			case "create-scene":
				// boxes
				Self.boxes = [...Array(17)].map(b => ({
					x: Utils.random(0, Self.cvs.width + 100) - 50 | 0,
					y: Utils.random(0, Self.cvs.height - 70) + 35 | 0,
					d: Utils.random(.1, 1.25), // speed
					w: Utils.random(20, 60) | 0,
					h: Utils.random(20, 60) | 0,
					r: Utils.random(0, Math.PI),
					rD: Utils.random(.05, .2),
				}));

				// lines
				Self.perlin = new ClassicalNoise();
				Self.variation = .0027;
				Self.amp = 560;
				Self.maxLines = 29;
				Self.variators = [];
				Self.startY = Self.cvs.height >> 1;

				for (let i=0, u=0; i<Self.maxLines; i++, u+=.025) {
					Self.variators[i] = u;
				}

				Self.ctx.fillStyle = "#aaddff55";
				Self.ctx.strokeStyle = `#aaddff33`;
				Self.ctx.lineWidth = 1;

				// console.log( Self.boxes );
				break;
		}
	},
	update(Self) {
		// boxes
		Self.boxes.map(b => {
			// move left
			b.x -= b.d;
			if (b.x + b.w < -30) {
				// reset box
				b.y = Utils.random(0, Self.cvs.height - 70) + 35 | 0;
				b.w = Utils.random(20, 60) | 0;
				b.x = Self.cvs.width + (b.w * 2);
				b.d = Utils.random(.1, 1.25);
			}
			// rotate
			b.r += .01;
		});
	},
	draw() {
		let Self = Anim,
			cvs = Self.cvs,
			ctx = Self.ctx;
		// clear react
		ctx.clearRect(0, 0, cvs.width, cvs.height);

		// ctx.globalCompositeOperation = "lighter";
		Self.boxes.map(b => {
			ctx.save();
			ctx.translate(b.x, b.y);
			ctx.rotate(b.r);
			ctx.fillRect(-b.w >> 1, -b.h >> 1, b.w, b.h);
			ctx.restore();
		});

		// lines
		for (let i=0; i<=Self.maxLines; i++) {
			ctx.beginPath();
			ctx.moveTo(-5, Self.startY);

			for (let x=0; x<cvs.width; x++) {
				let y = Self.perlin.noise(x * Self.variation + Self.variators[i], x * Self.variation, 0);
				ctx.lineTo(x, Self.startY + Self.amp * y);
			}
			ctx.stroke();
			ctx.closePath();
			// wavines
			Self.variators[i] += .00075;
		}

		// next tick
		if (!Self.paused) {
			Self.update(Self);
			requestAnimationFrame(Self.draw);
		}
	}
};

// auto call init
Anim.init();

// forward message / event
self.onmessage = event => Anim.dispatch(event.data);



// simple utils
let Utils = {
	// get a random number within a range
	random(min, max) {
		return Math.random() * ( max - min ) + min;
	},
	// calculate the distance between two points
	calculateDistance(p1x, p1y, p2x, p2y) {
		let xDistance = p1x - p2x,
			yDistance = p1y - p2y;
		return Math.sqrt((xDistance ** 2) + (yDistance ** 2));
	}
};


class ClassicalNoise {
	constructor(r) {
		if (r == undefined) r = Math;
		this.grad3 = [[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0], 
					 [1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1], 
					 [0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]]; 
		this.p = [];
		for (let i=0; i<256; i++) {
			this.p[i] = Math.floor(r.random()*256);
		}
		// To remove the need for index wrapping, double the permutation table length 
		this.perm = []; 
		for(let i=0; i<512; i++) {
			this.perm[i]=this.p[i & 255];
		}
	}

	dot(g, x, y, z) { 
		return g[0]*x + g[1]*y + g[2]*z; 
	}

	mix(a, b, t) { 
		return (1.0-t)*a + t*b; 
	}

	fade(t) { 
		return t*t*t*(t*(t*6.0-15.0)+10.0); 
	}

	// Classic Perlin noise, 3D version 
	noise(x, y, z) { 
		// Find unit grid cell containing point 
		let X = Math.floor(x); 
		let Y = Math.floor(y); 
		let Z = Math.floor(z); 
		
		// Get relative xyz coordinates of point within that cell 
		x = x - X; 
		y = y - Y; 
		z = z - Z; 
		
		// Wrap the integer cells at 255 (smaller integer period can be introduced here) 
		X = X & 255; 
		Y = Y & 255; 
		Z = Z & 255;
		
		// Calculate a set of eight hashed gradient indices 
		let gi000 = this.perm[X+this.perm[Y+this.perm[Z]]] % 12; 
		let gi001 = this.perm[X+this.perm[Y+this.perm[Z+1]]] % 12; 
		let gi010 = this.perm[X+this.perm[Y+1+this.perm[Z]]] % 12; 
		let gi011 = this.perm[X+this.perm[Y+1+this.perm[Z+1]]] % 12; 
		let gi100 = this.perm[X+1+this.perm[Y+this.perm[Z]]] % 12; 
		let gi101 = this.perm[X+1+this.perm[Y+this.perm[Z+1]]] % 12; 
		let gi110 = this.perm[X+1+this.perm[Y+1+this.perm[Z]]] % 12; 
		let gi111 = this.perm[X+1+this.perm[Y+1+this.perm[Z+1]]] % 12; 
		
		// The gradients of each corner are now: 
		// g000 = grad3[gi000]; 
		// g001 = grad3[gi001]; 
		// g010 = grad3[gi010]; 
		// g011 = grad3[gi011]; 
		// g100 = grad3[gi100]; 
		// g101 = grad3[gi101]; 
		// g110 = grad3[gi110]; 
		// g111 = grad3[gi111]; 
		// Calculate noise contributions from each of the eight corners 
		let n000= this.dot(this.grad3[gi000], x, y, z); 
		let n100= this.dot(this.grad3[gi100], x-1, y, z); 
		let n010= this.dot(this.grad3[gi010], x, y-1, z); 
		let n110= this.dot(this.grad3[gi110], x-1, y-1, z); 
		let n001= this.dot(this.grad3[gi001], x, y, z-1); 
		let n101= this.dot(this.grad3[gi101], x-1, y, z-1); 
		let n011= this.dot(this.grad3[gi011], x, y-1, z-1); 
		let n111= this.dot(this.grad3[gi111], x-1, y-1, z-1); 
		// Compute the fade curve value for each of x, y, z 
		let u = this.fade(x); 
		let v = this.fade(y); 
		let w = this.fade(z); 
		 // Interpolate along x the contributions from each of the corners 
		let nx00 = this.mix(n000, n100, u); 
		let nx01 = this.mix(n001, n101, u); 
		let nx10 = this.mix(n010, n110, u); 
		let nx11 = this.mix(n011, n111, u); 
		// Interpolate the four results along y 
		let nxy0 = this.mix(nx00, nx10, v); 
		let nxy1 = this.mix(nx01, nx11, v); 
		// Interpolate the two last results along z 
		let nxyz = this.mix(nxy0, nxy1, w); 

		return nxyz;
	}
}
