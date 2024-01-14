
class Ball {
		
	constructor(game) {
		this.image = document.getElementById("image_ball");
		
		this.size = 22;
		this.gameHeight = game.gameHeight;
		this.gameWidth = game.gameWidth;
		
		this.game = game;
		
		this.resetBall();
		
	}
	
	resetBall(){
		this.position = {
			x: 10,
			y: 200
		};
		
		this.speed = {
			x: 5, y: 5
		};
	}
		
	draw(context) {
		context.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
	}
	
	update(deltaTime){
		
		this.position.x += this.speed.x;
		this.position.y += this.speed.y;
			
		// wall on left or right
		if (this.position.x > this.gameWidth - this.size || this.position.x < 0){
			this.speed.x = -this.speed.x;
		}
		
		// top of canvas
		if (this.position.y < 0){
			this.speed.y = -this.speed.y;
		}
		
		// bottom of canvas
		if(this.position.y > this.gameHeight - this.size){
			this.game.lives--;
			this.resetBall();
		}
		
		if (detectCollision(this, this.game.paddle)){
			this.speed.y = -this.speed.y;
			this.position.y = this.game.paddle.position.y - this.size;
		}
		
	}
	
}