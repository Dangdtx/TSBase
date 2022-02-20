import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl {
	snake: Snake;
	food: Food;
	scorePanel: ScorePanel;
	direction: string;
	isLive: boolean;
	constructor() {
		this.direction = "Right";
		this.snake = new Snake();
		this.food = new Food();
		this.scorePanel = new ScorePanel();
		this.isLive = true;
		this.init();
	}
	// 初始化
	init() {
		document.addEventListener("keydown", this.keydownHandler.bind(this));
		this.run();
	}
	keydownHandler(event: KeyboardEvent) {
		this.direction = event.key;
	}
	// 控制蛇的移动  根据direction改变位置
	//
	run() {
		let X = this.snake.X;
		let Y = this.snake.Y;
		switch (this.direction) {
			case "ArrowUp":
			case "Up":
				Y -= 10;
				break;
			case "ArrowDown":
			case "Down":
				Y += 10;
				break;
			case "ArrowLeft":
			case "Left":
				X -= 10;
				break;
			case "ArrowRight":
			case "Right":
				X += 10;
				break;
		}
		this.checkEat(X, Y);
		try {
			this.snake.X = X;
			this.snake.Y = Y;
		} catch (e) {
			alert("GAME OVER");
			this.isLive = false;
		}

		this.isLive &&
			setTimeout(
				this.run.bind(this),
				300 - (this.scorePanel.level - 1) * 30
			);
	}

	checkEat(X: number, Y: number) {
		if (this.food.X == X && this.food.Y == Y) {
			this.food.change();
			this.snake.addBody();
			this.scorePanel.addScore();
		}
	}
}

export default GameControl;
