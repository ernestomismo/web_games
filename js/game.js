const GAME_STATE = {
	PAUSED: 0,
	RUNNING: 1,
	MENU: 2,
	GAME_OVER: 3,
	NEW_LEVEL: 4
}

class Game {
	constructor(gameWidth, gameHeight) {
		this.gameHeight = gameHeight;
		this.gameWidth = gameWidth;
		
		this.gameState = GAME_STATE.MENU;
		this.paddle = new Paddle(this);
		this.ball = new Ball(this);
		
		this.lives = 3;
		
		new InputHandler(this.paddle, this);
		
		this.gameObjects = [];
		this.bricks = [];
		
		this.levels = [level1, level2, level3];
		this.currenLevel = 0;
	}
	
	start(){
		
		if (this.gameState !== GAME_STATE.MENU && this.gameState !== GAME_STATE.NEW_LEVEL){
			return;
		}
		
		//let bricks = buildLevel(game, level1);
		//this.gameObjects = [this.ball, this.paddle, ...bricks];
		
		this.bricks = buildLevel(game, this.levels[this.currenLevel]);
		this.ball.resetBall();
		this.gameObjects = [this.ball, this.paddle];
		
		this.gameState = GAME_STATE.RUNNING;
	}
	
	update(deltaTime){
		
		if(this.lives === 0){
			this.gameState = GAME_STATE.GAME_OVER;
		}
		
		if (this.gameState == GAME_STATE.PAUSED || this.gameState == GAME_STATE.MENU
		|| this.gameState === GAME_STATE.GAME_OVER){
			return;
		}
		
		if (this.bricks.length === 0){
			this.currenLevel++;
			this.gameState = GAME_STATE.NEW_LEVEL;
			this.start();
		}
		
		//this.gameObjects.forEach(object => object.update(deltaTime));
		[...this.bricks, ...this.gameObjects].forEach(object => object.update(deltaTime));
		
		
		this.bricks = this.bricks.filter(brick => !brick.markedForDeletion);
	}
	
	draw(context){
		//this.gameObjects.forEach(object => object.draw(context));	
		[...this.bricks, ...this.gameObjects].forEach(object => object.draw(context));	
		
		if (this.gameState === GAME_STATE.PAUSED) {
		  context.rect(0, 0, this.gameWidth, this.gameHeight);
		  context.fillStyle = "rgba(0,0,0,0.5)";
		  context.fill();

		  context.font = "30px Arial";
		  context.fillStyle = "white";
		  context.textAlign = "center";
		  context.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2);
		}
		
		if (this.gameState === GAME_STATE.MENU) {
		  context.rect(0, 0, this.gameWidth, this.gameHeight);
		  context.fillStyle = "rgba(0,0,0,1)";
		  context.fill();

		  context.font = "30px Arial";
		  context.fillStyle = "white";
		  context.textAlign = "center";
		  context.fillText("Pres space bar to start game", this.gameWidth / 2, this.gameHeight / 2);
		}
		
		if (this.gameState === GAME_STATE.GAME_OVER) {
		  context.rect(0, 0, this.gameWidth, this.gameHeight);
		  context.fillStyle = "rgba(0,0,0,1)";
		  context.fill();

		  context.font = "30px Arial";
		  context.fillStyle = "white";
		  context.textAlign = "center";
		  context.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2);
		}
		
	}
	
	togglePause(){
		if (this.gameState == GAME_STATE.PAUSED){
			this.gameState = GAME_STATE.RUNNING;
		} else {
			this.gameState = GAME_STATE.PAUSED
		}
	}
}