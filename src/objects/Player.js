export class Player {
	constructor(game, x, y) {
    this.playerBody = game.add.sprite(x, y, 'dude');
    //  We need to enable physics on the player
    game.physics.arcade.enable(this.playerBody);
    //  Player physics properties. Give the little guy a slight bounce.
    // this.playerBody.body.bounce.y = 0.2;
    this.playerBody.body.gravity.y = 300;
    this.playerBody.body.collideWorldBounds = true;
    //  Our two animations, walking left and right.
    this.playerBody.animations.add('left', [0, 1, 2, 3], 10, true);
    this.playerBody.animations.add('right', [5, 6, 7, 8], 10, true);

		this.score = 0;

		this.fontOptions = { fontSize: '32px', fill: '#000' };
		this.scoreText = game.add.text(16, 16, 'Score: 0', this.fontOptions);

		let xCoord = game.camera.width - 170;
		this.healthText = game.add.text(xCoord, 16, 'Health: 10', this.fontOptions);
	}

  handleInput(cursors, contacts) {
    //  Reset the players velocity (movement)
    this.playerBody.body.velocity.x = 0;

    if (cursors.left.isDown) {
        //  Move to the left
        this.playerBody.body.velocity.x = -150;
        this.playerBody.animations.play('left');
    }
    else if (cursors.right.isDown) {
        //  Move to the right
        this.playerBody.body.velocity.x = 150;
        this.playerBody.animations.play('right');
    }
    else {
        //  Stand still
        this.playerBody.animations.stop();
        this.playerBody.frame = 4;
    }

    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && this.playerBody.body.touching.down && contacts) {
        this.playerBody.body.velocity.y = -350;
    }
  }

	addScore(amount) {
		this.score += amount;
		this.scoreText.text = `Score: ${this.score}`;
	}
}

export function loadPlayerImage(gameObj) {
  gameObj.load.spritesheet('dude', 'assets/dude.png', 32, 48);
}
