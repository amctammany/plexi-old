'use strict';

var Behavior = plexi.module('Behavior');

Behavior.create('rectangle', {
  properties: ['x', 'y', 'width', 'height'],

  draw: function (ctx) {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },

});
