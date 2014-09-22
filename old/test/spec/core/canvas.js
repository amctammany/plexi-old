'use strict';

describe('plexi::Canvas', function () {
  var Canvas = plexi.module('Canvas');
    var game;

  beforeEach(function () {
    game = plexi.load(config);
  });

  it('should create canvas', function () {
    expect(game._canvas).toBe(Canvas.get(config.canvas.main.id));
  });


});
