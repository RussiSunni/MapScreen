window.onload = function () {
    var config = {
        type: Phaser.AUTO,
        width: 640,
        height: 640,
        scene: {
            preload: preload,
            create: create
        }
    };

    var game = new Phaser.Game(config);

    function preload() {
        this.load.image('map', '/images/map.jpg');
        this.load.image('hut', '/images/hut.png');
    }

    function create() {
        this.add.image(320, 320, 'map');

        var forest = this.add.image(140, 280, 'hut');
        forest.scale = 0.5;

    }
}