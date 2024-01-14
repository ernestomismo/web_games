function buildLevel(game, level){
	let bricks = [];
		
	level.forEach((row, rowIndex) => {
		row.forEach((brick, brickIndex) => {
			if (brick === 1){
				let position = {
					x: 80 * brickIndex,
					y: 20 + 24 * rowIndex
				};
				bricks.push(new Brick(game, position, "image_purple_brick", "soft"));
			}
			if (brick === 2){
				let position = {
					x: 80 * brickIndex,
					y: 20 + 24 * rowIndex
				};
				bricks.push(new Brick(game, position, "image_blue_brick", "soft"));
			}
			if (brick === 3){
				let position = {
					x: 80 * brickIndex,
					y: 20 + 24 * rowIndex
				};
				bricks.push(new Brick(game, position, "image_gold_brick", "hard"));
			}
		})
	})
	
	return bricks;
}

/*const level1 = [
	[0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
];*/

const level1 = [
	[0, 1, 1, 1, 0, 1, 0, 1, 1, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
];

const level2 = [
	[0, 2, 0, 2, 0, 2, 0, 2, 0, 2],
	[2, 0, 2, 0, 2, 0, 2, 0, 2, 0],
	[0, 2, 0, 2, 0, 2, 0, 2, 0, 2],
	[2, 0, 2, 0, 2, 0, 2, 0, 2, 0]
];

const level3 = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 3, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 3, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];