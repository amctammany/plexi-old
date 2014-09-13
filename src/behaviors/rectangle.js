'use strict';

var Behavior = plexi.module('Behavior');

Behavior.create('rectangle', {
  properties: ['x', 'y', 'width', 'height'],

  draw: function (ctx, body) {
    console.log('fail')
    ctx.fillStyle = 'black';
    ctx.fillRect(body.x, body.y, body.width, body.height);
  },

});
