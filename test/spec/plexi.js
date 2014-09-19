'use strict';

describe('plexi', function () {
  it('should be true', function () {
    expect(!!plexi).toBe(true);
  });
  it('should load config', function () {
    var config = {
      canvas: {
        main: {

          id: 'game-canvas',
          width: 600,
          height: 600,
        }
      },
      bodyTypes: {
        'player1': {
          behaviors: ['particle', 'circle'],
          radius: 15,
        },
        'enemy1': {
          behaviors: ['particle', 'rectangle'],
          width: 10,
          height: 10,
        }
      },
      randomProp: 'foobar',
    };

    var game = plexi.load(config);
    expect(game).toBe(plexi.game());
    //expect(plexi.bar).toBe('bar');
  });

  //it('should create module', function () {
    //var id = 'foo';
    //var config = function () {
      //return {
        //name: 'foo',
        //bar: 'foobar'
      //};
    //};
    //var module = plexi.module(id, config);
    ////expect(module).toBe(config());
    //for (var key in config()) {
      //expect(module[key]).toBe(plexi.module(id)[key]);
    //}
  //});

  it('should throw error if invalid module id', function () {
    var module = plexi.module('notReal');
    expect(!!module).toBe(false);
  });
});
