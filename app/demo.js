var config = {
  canvas: {
    id: 'game-canvas',
    width: 600,
    height: 600,
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
  }
};


var game = plexi.load(config);
