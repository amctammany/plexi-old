'use strict';

var Behavior = plexi.module('Behavior');

Behavior.create('text', {
  properties: ['text', 'x', 'y', 'width', 'height'],

  draw: function (ctx, body) {
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.font = '40pt Calibri';
    ctx.fillText(body.text, body.x, body.y + 2*body.height/3);
  },

});
