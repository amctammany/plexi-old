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
      width: 20,
      height: 20,
      behaviors: ['particle', 'rectangle'],
    },
    'wall': {
      behaviors: ['rectangle']
    }
  },

  levels: {

    'intro': {
      bodies: [
        {type: 'player', config: {x: 100, y: 100}},
        {type: 'enemy', config: {x: 200, y: 200}},
        {type: 'wall', config: {x: 0, y: 0, width: 600, height: 20 }},
        {type: 'wall', config: {x: 580, y: 0, width: 20, height: 600 }},
        {type: 'wall', config: {x: 0, y: 580, width: 600, height: 20 }},
        {type: 'wall', config: {x: 0, y: 0, width: 20, height: 600 }},

      ]
    }
  }
};


var game = plexi.load(config);
game.canvii[0].init();

game.canvii[0].draw(game.world);
