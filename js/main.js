window.onload = function () {
    var config = {
        type: Phaser.AUTO,
        width: 640,
        height: 640,
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };


    var cursors;
    var player;

    var game = new Phaser.Game(config);

    function preload() {
        this.load.image('map', '/images/map.jpg');
        this.load.image('hut', '/images/hut.png');
        this.load.image('player', '/images/player.png');
    }

    function create() {
        this.add.image(320, 320, 'map');

        var forest = this.add.image(140, 280, 'hut');
        forest.scale = 0.5;

        cursors = this.input.keyboard.createCursorKeys();

        player = this.add.sprite(100, 450, 'player');
    }

    function update() {
        if (cursors.left.isDown) {
            player.x = player.x - 2;
        }
        else if (cursors.right.isDown) {
            player.x = player.x + 2;
        }
        else if (cursors.down.isDown) {
            player.y = player.y + 2;
        }
        else if (cursors.up.isDown) {
            player.y = player.y - 2;
        }

    }
}