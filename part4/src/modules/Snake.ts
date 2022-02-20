class Snake {
	element: HTMLElement;
	head: HTMLElement;
	bodies: HTMLCollection;
	constructor() {
		this.element = document.getElementById("snake")!;
		this.head = document.querySelector("#snake > div")!;
		this.bodies = this.element.getElementsByTagName("div");
	}
	// 获取蛇位置
	get X() {
		return this.head.offsetLeft;
	}
	get Y() {
		return this.head.offsetTop;
	}
	// 设置蛇头位置
	set X(value: number) {
		if (this.X == value) {
			return;
		}
		if (value < 0 || value > 290) {
			throw new Error("蛇撞墙啦");
		}

		// 调头  水平方向
		if (
			this.bodies[1] &&
			(this.bodies[1] as HTMLElement).offsetLeft == value
		) {
			if (value > this.X) {
				// 向右
				value = this.X - 10;
			} else {
				value = this.X + 10;
			}
		}

		if (this.bodies[1]) {
			this.moveBody();
		}
		this.head.style.left = value + "px";
		this.checkBody();
	}
	set Y(value: number) {
		if (this.Y == value) {
			return;
		}
		if (value < 0 || value > 290) {
			throw new Error("蛇撞墙啦");
		}
		// 调头  水平方向
		if (
			this.bodies[1] &&
			(this.bodies[1] as HTMLElement).offsetTop == value
		) {
			if (value > this.Y) {
				// 向下
				value = this.Y - 10;
			} else {
				value = this.Y + 10;
			}
		}
		if (this.bodies[1]) {
			this.moveBody();
		}

		this.head.style.top = value + "px";
		this.checkBody();
	}
	addBody() {
		this.element.appendChild(document.createElement("div"));
	}
	moveBody() {
		// 替换所有的身体 除了头部
		// 从后往前替换  第4节 = 第3节
		//               第3节 = 第2节
		//              第2节 = 蛇头
		for (let i = this.bodies.length - 1; i > 0; i--) {
			let X = (this.bodies[i - 1] as HTMLElement).offsetLeft + "px";
			let Y = (this.bodies[i - 1] as HTMLElement).offsetTop + "px";
			(this.bodies[i] as HTMLElement).style.left = X;
			(this.bodies[i] as HTMLElement).style.top = Y;
		}
	}

	checkBody() {
		for (let i = 1; i < this.bodies.length; i++) {
			let X = (this.bodies[i] as HTMLElement).offsetLeft;
			let Y = (this.bodies[i] as HTMLElement).offsetTop;
			if (X == this.X && Y == this.Y) {
				throw new Error("撞到自己");
			}
		}
	}
}
export default Snake;
