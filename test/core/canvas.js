'use strict';

describe('plexi::Canvas', function () {
  var Canvas = plexi.module('Canvas');
  var config = {
    canvas: {

      main: {
        id: 'game-canvas',
        width: 600,
        height: 600,
      },
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

  it('should create canvas', function () {
    expect(game._canvas).toBe(Canvas.get(config.canvas.main.id));
  });


});
