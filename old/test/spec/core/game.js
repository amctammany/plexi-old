'use strict';

describe('plexi::Game', function () {
  var Canvas = plexi.module('Canvas');

  var game;

  beforeEach(function () {
    game = plexi.load(config);
  });

  it('should load bodyTypes', function () {
    //console.log(plexi.module('BodyType'));
    expect(plexi.module('BodyType').length()).toBe(Object.keys(config.bodyTypes).length);
  });


});
