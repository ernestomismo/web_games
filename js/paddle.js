class Paddle {
		
	constructor(game) {
		this.image = document.getElementById("image_paddle");
		this.width = 150;
		this.height = 20;
		
		this.maxSpeed = 7;
		this.speed = 0;
		
		this.position = {
			x: (game.gameWidth/2) - (this.width/2),
			y: game.gameHeight - this.height - 10
		};
	}
		
	draw(context) {
		/*context.fillStyle = "#0f0";
		context.fillRect(this.position.x, this.position.y, this.width, this.height);*/
		context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
	}
	
	moveLeft(){
		this.speed = - this.maxSpeed;
	}
	
	moveRight(){
		this.speed = this.maxSpeed;
	}
	
	stop(){
		this.speed = 0;
	}
	
	update(deltaTime){
		this.position.x += this.speed;
		
		if (this.position.x < 0){
			this.position.x = 0;
		}
		
		if (this.position.x > 650){
			this.position.x = 650;
		}
	}
}