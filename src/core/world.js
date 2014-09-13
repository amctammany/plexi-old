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

    },
    addBody: function (body) {
      _private.bodies.push(body);
    },
    getBodies: function () {
      return _private.bodies;
    },

  };
});
