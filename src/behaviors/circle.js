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
  createPath: function (ctx, body) {
    ctx.beginPath();
    ctx.arc(body.x, body.y, body.radius, 0, 6.28, 0);
    ctx.closePath();
  },
  isPointInPath: function (ctx, body, x, y) {
    this.createPath(ctx, body);
    return ctx.isPointInPath(x, y);
  },

});
