'use strict';

var Behavior = plexi.module('Behavior');

Behavior.create('text', {
  properties: ['text', 'x', 'y', 'width', 'height'],
  methods: ['createPath', 'isPointInPath'],

  draw: function (ctx, body) {
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.font = '40pt Calibri';
    ctx.fillText(body.text, body.x, body.y + 2*body.height/3);
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
