class Brick {
		
	constructor(game, position, imageBrick, type) {
		this.image = document.getElementById(imageBrick);
		
		this.position = position;
		
		this.width = 80;
		this.height = 24;
		
		this.game = game;
		
		this.markedForDeletion = false;
		
		this.type = type
	}
	
	// detectCollision está definida en collisionDetection.js
	update(){
		if (detectCollision(this.game.ball, this)){
			this.game.ball.speed.y = -this.game.ball.speed.y;
			this.markedForDeletion = true;
		}
	}
	
	draw(context){
		context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
	}
	
}