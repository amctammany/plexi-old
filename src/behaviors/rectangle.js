'use strict';

var Behavior = plexi.module('Behavior');

Behavior.create('rectangle', {
  properties: ['x', 'y', 'width', 'height'],

  draw: function (ctx, body) {
    ctx.fillStyle = 'black';
    ctx.fillRect(body.x, body.y, body.width, body.height);
  },

});
