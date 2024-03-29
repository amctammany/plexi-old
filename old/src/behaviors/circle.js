'use strict';

var Behavior = plexi.module('Behavior');

Behavior.create('circle', {
  properties: ['x', 'y', 'radius'],

  draw: function (ctx, body) {
    ctx.fillStyle = body.fillStyle || 'black';
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
  //select: function (body) {
    ////body.fillStyle = 'red';
    //body.bodytype.changeState(body, 'selected');

    //body.token = plexi.subscribe('selectedBody', body.dispatch.bind(body));
    //plexi.publish(['Mouse', 'changeSetup', 'selected']);
  //},
  //unselect: function (body) {
    //this.bodytype.changeState(this, 'damaged');

    //plexi.unsubscribe(this.token);
  //},

});
