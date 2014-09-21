'use strict';

var Behavior = plexi.module('Behavior');

Behavior.create('particle', {
  properties: ['x', 'y'],

  shift: function (dx, dy) {
    this.x += dx;
    this.y += dy;
  },

  move: function (x, y) {
    this.x = x;
    this.y = y;
  },

});
