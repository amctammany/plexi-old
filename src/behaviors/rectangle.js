'use strict';

var Behavior = plexi.module('Behavior');

Behavior.create('rectangle', {
  properties: ['x', 'y', 'width', 'height'],

  draw: function (ctx, body) {
    ctx.fillStyle = 'black';
    ctx.fillRect(body.x, body.y, body.width, body.height);
  },
  createPath: function (ctx, body) {
    ctx.beginPath();
    ctx.rect(body.x, body.y, body.width, body.height);
    ctx.closePath();
  },
  isPointInPath: function (ctx, body, x, y) {
    this.createPath(ctx, body);
    return ctx.isPointInPath(x, y);
  },

});
