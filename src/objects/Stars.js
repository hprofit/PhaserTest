export class Star {
	constructor(owningGroup, x, y) {
    this.star = owningGroup.create(x, y, 'star');
    this.star.body.gravity.y = 150;
    //  This just gives each star a slightly random bounce value
    this.star.body.bounce.y = 0.7 + Math.random() * 0.2;
	}
}

export function loadStarImage(gameObj) {
  gameObj.load.image('star', 'assets/star.png');
}

export class StarGroup {
  constructor(game) {
    this.group = game.add.group();
    this.group.enableBody = true;
    //  Here we'll create 12 of them evenly spaced apart
    for (let i = 0; i < 12; i++) {
       //  Create a star inside of the 'stars' group
       new Star(this.group, i * 70, 0);
    }
  }

  collectStar (player, star) {
    // Removes the star from the screen
    star.kill();
  }
}
