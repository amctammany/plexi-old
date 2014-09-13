'use strict';

var Behavior = plexi.module('Behavior');

Behavior.create('circle', {
  properties: ['x', 'y', 'radius'],

  draw: function (ctx, body) {
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(body.x, body.y, body.radius, 0, 6.28, 0);
    ctx.closePath();
    ctx.fill();
  },

});
