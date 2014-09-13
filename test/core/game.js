'use strict';

describe('plexi::Game', function () {
  var Canvas = plexi.module('Canvas');
  var config = {
    main: {
      id: 'game-canvas',
      width: 600,
      height: 600,
    },

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

  var game;

  beforeEach(function () {
    game = plexi.load(config);
  });

  it('should load bodyTypes', function () {
    //console.log(plexi.module('BodyType'));
    expect(plexi.module('BodyType').length()).toBe(2);
  });


});
