'use strict';

var Behavior = plexi.module('Behavior');

Behavior.create('particle', {
  properties: ['x', 'y'],

  move: function (dx, dy) {
    this.x += dx;
    this.y += dy;
  },

});
