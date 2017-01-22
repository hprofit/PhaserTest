import GameState from './states/GameState';

class Game extends Phaser.Game {
	constructor() {
		super(800, 600, Phaser.AUTO, 'content', new GameState());
    // this.gameState = new GameState();
		// this.state.add('GameState', this.gameState, false);
		// this.state.start('GameState');
	}
}

new Game();
