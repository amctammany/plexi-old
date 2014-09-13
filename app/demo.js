var config = {
  canvas: {
    main: {
      id: 'game-canvas',
      width: 600,
      height: 600,
    }
  },
  width: 100,
  height: 200,
  bodyTypes: {
    'player': {
      radius: 15,
      behaviors: ['particle', 'circle'],
    },
    'enemy': {
      width: 10,
      height: 10,
      behaviors: ['particle', 'rectangle'],
    }
  },

  levels: {

    'intro': {
      bodies: [
        {type: 'player', config: {x: 100, y: 100}},
        {type: 'enemy', config: {x: 200, y: 200}},

      ]
    }
  }
};


var game = plexi.load(config);

game.draw();
