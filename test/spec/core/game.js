'use strict';

describe('plexi::Game', function () {

  var Game;
  beforeEach(function () {
    plexi = plexi.clone();
    //plexi.reset();
    //plexi.reset();
    Game = plexi.module('Game');
  });

  it('should be true', function () {
    expect(!!Game).toBe(true);
  });

  it('should create instance of Game', function () {
    var game = Game.create('id', {
      width: 100,

    });

    expect(!!game).toBe(true);
    expect(game.constants.width).toBe(100);

    console.log(Game.children);
    expect(Game.length()).toBe(1);
  });

  it('should create game with preset world and mouse', function () {
    plexi.load(config);
    var game = plexi.module('Game').get('main');
    expect(game.current.world).toBe(plexi.module('World').get(config.Game.World));
    //expect(game.current.mouse).toBe(plexi.module('Mouse').get(config.Game.Mouse));
  })
});
