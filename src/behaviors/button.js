'use strict';

var Behavior = plexi.module('Behavior');

Behavior.create('button', {
  properties: ['text', 'x', 'y', 'width', 'height'],

  draw: function (ctx, body) {
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.rect(body.x, body.y, body.width, body.height);
    ctx.fill();
    ctx.fillStyle = 'red';
    ctx.font = '40pt Calibri';
    ctx.fillText(body.text, body.x, body.y + 2*body.height/3);
  },

});
