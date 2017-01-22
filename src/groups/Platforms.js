import { Ground, loadGroundImage } from '../objects/Ground.js';
import { Ledge, loadLedgeImage } from '../objects/Ledge.js';

export class Platforms {
	constructor(game) {
    //  The this.platforms group contains the ground and the 2 ledges we can jump on
    this.group = game.add.group();
    //  We will enable physics for any object that is created in this group
    this.group.enableBody = true;

    new Ground(this.group, 0, game.world.height - 64);
    //  Now let's create two ledges
    new Ledge(this.group, 400, 400);
    new Ledge(this.group, -150, 250);
	}
}

export function preloadPlatforms(game) {
  loadGroundImage(game);
  loadLedgeImage(game);
}
