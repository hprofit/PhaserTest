import Tile from './Tile'

export class Ground extends Tile {
	constructor(owningGroup, x, y) {
    super();

    this.tile = owningGroup.create(x, y, 'ground');
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    this.tile.scale.setTo(2, 2);
    //  This stops it from falling away when you jump on it
    this.tile.body.immovable = true;
	}
}

export function loadGroundImage(gameObj) {
  gameObj.load.image('ground', 'assets/platform.png');
}
