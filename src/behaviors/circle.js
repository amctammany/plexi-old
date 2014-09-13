'use strict';

var Behavior = plexi.module('Behavior');

Behavior.create('circle', {
  properties: ['x', 'y', 'radius'],

  draw: function (ctx) {
    ctx.arc(this.x, this.y, this.radius, 0, 6.28, 1);
  },

});
