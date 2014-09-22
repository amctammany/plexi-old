'use strict';


describe('plexi::Behavior', function () {
  var Behavior = plexi.module('Behavior');


  var game;
  beforeEach(function () {
    game = plexi.load(config);
  });

  it('should create behavior', function () {
    expect(!!game).toBe(true);
  });


});
