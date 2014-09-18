'use strict';

plexi.module('World', function () {

  var _private = {
    bodies: [],
    forces: [],
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
    getBodies: function () {
      return _private.bodies;
    },

  };
});
