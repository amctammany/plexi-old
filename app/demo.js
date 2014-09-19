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
  keyboards: {
    main: {
      keys: {
        'up': ['selectedPlayer', 'move']
      }
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
    },
    'deuce': {
      bodies: [
        {type: 'player', config: {x: 100, y: 300}},
        {type: 'enemy', config: {x: 400, y: 500}},
        {type: 'wall', config: {x: 40, y: 0, width: 600, height: 10 }},
        {type: 'wall', config: {x: 480, y: 0, width: 10, height: 600 }},
        {type: 'wall', config: {x: 0, y: 480, width: 600, height: 10 }},
        {type: 'wall', config: {x: 0, y: 0, width: 10, height: 600 }},

      ]
    }

  }
};


var game = plexi.load(config);
game.start();
