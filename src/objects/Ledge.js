import Tile from './Tile'

export class Ledge extends Tile {
	constructor(owningGroup, x, y) {
    super();

    this.tile = owningGroup.create(x, y, 'ground');
    //  This stops it from falling away when you jump on it
    this.tile.body.immovable = true;
	}
}

export function loadLedgeImage(gameObj) {
  gameObj.load.image('ground', 'assets/platform.png');
}
