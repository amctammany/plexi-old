'use strict';

describe('plexi::Game', function () {

  var Game;
  beforeEach(function () {
    Game = plexi.module('Game');
  });

  it('should be true', function () {
    expect(!!Game).toBe(true);
  });

  it('should create instance of Game', function () {
    var game = Game.create('id', {
      width: 100,
      bodytypes: {
        'hero': {
          x: 100,
          y: 150,
        },
      },
    });

    expect(!!game).toBe(true);
    expect(game.constants.width).toBe(100);

    expect(game.bodytypes.length).toBe(1);
  });
});
