
function detectCollision(ball, gameObject){
			
	// check collision with paddle
	let bottomOfBall = ball.position.y + ball.size;
	let topOfBall = ball.position.y;
	
	let topOfObject = gameObject.position.y;
	let bottomOfObject = gameObject.position.y + gameObject.height;
	let leftSideOfObject = gameObject.position.x;
	let rightSideOfObject = gameObject.position.x + gameObject.width;
			
		
	
		
	if (bottomOfBall >= topOfObject &&
		topOfBall <= bottomOfObject &&
		ball.position.x > leftSideOfObject &&
		ball.position.x < rightSideOfObject){
		return true;
	} else {
		return false;
	}

}