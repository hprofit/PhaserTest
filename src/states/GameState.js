import { Platforms, preloadPlatforms } from '../groups/Platforms.js';
import { Star, StarGroup, loadStarImage } from '../objects/Stars.js';
import { Player, loadPlayerImage } from '../objects/Player.js';

class GameState extends Phaser.State {
	preload() {
    this.game.load.image('sky', 'assets/sky.png');
		loadStarImage(this.game);
		loadPlayerImage(this.game);
		preloadPlatforms(this.game);

		this.platforms = null;
		this.stars = null;
		this.player = null;
  }

  create() {
		//  We're going to be using physics, so enable the Arcade Physics system
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    //  A simple background for our game
    this.game.add.sprite(0, 0, 'sky');

    this.platforms = new Platforms(this.game);
		this.stars = new StarGroup(this.game);
		this.player = new Player(this.game, 32, this.game.world.height - 150);
  }

	collideGroups(groupA, groupB) {
		return this.game.physics.arcade.collide(groupA, groupB);
	}

	overlapEntityAndGroup(game, entity, group, callback, callbackContext) {
		let hits = 0;
		if (group.children) {
			group.children.forEach(function(groupEntity, index) {
				hits += game.physics.arcade.overlap(entity, groupEntity, callback, null, callbackContext) ? 1 : 0;
			});
		}
		return hits;
		// this.game.physics.arcade.overlap(entity, this.stars.group, callback, null, callbackContext);
	}

  update() {
		this.collideGroups(this.stars.group, this.platforms.group);

		let starsCollected = this.overlapEntityAndGroup(this.game, this.player.playerBody, this.stars.group, this.stars.collectStar, this.stars);
		if (starsCollected > 0){
			// Calls the player to add points when a star is removed
			this.player.addScore(50 * starsCollected);
		}
		//  Collide the player and the stars with the this.platforms
		let hitPlatform = this.collideGroups(this.player.playerBody, this.platforms.group);

		let cursors = this.game.input.keyboard.createCursorKeys();
		this.player.handleInput(cursors, hitPlatform);
  }
}

export default GameState;
