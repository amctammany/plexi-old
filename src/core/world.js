'use strict';

plexi.module('World', function () {

  var _private = {
    bodies: [],
    forces: [],
    selectedBody: undefined,
  };

  var _methods = {
    select: function (x, y) {
      console.log('x: ' + x + '; y: ' + y + ';');
    },
    selectBody: function (ctx, x, y) {
      var body;
      _private.bodies.forEach(function (b) {
        if (b.bodytype.isPointInPath(ctx, b, x, y)) {
          body = b;
        }
      });
      return body;
    },
    reset: function () {
      _private.bodies = [];
      _private.forces = [];
    },
  };
  return {
    reset: function () {
      _private.bodies = [];
      _private.forces = [];
    },
    integrate: function (delta) {
      //_private.bodies.forEach(function (body) {
        //body.x += 10;
        //body.y += 10;
      //});

    },
    addBody: function (body) {
      _private.bodies.push(body);
    },
    dispatch: function (channel, args) {
      var n = args.shift();
      var fn = _methods.hasOwnProperty(n) ? _methods[n] : false;
      if (fn) {
        return fn.apply(null, args);
      }
    },
    getBodies: function () {
      return _private.bodies;
    },

  };
});
