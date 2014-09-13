'use strict';

plexi.module('Level', function () {
  var _private = {
    children: {},
  };
  var _methods = {
    bodies: function (level, bodies) {
      var BodyType = plexi.module('BodyType');
      level.bodies = bodies.map(function (body) {
        return BodyType.get(body.type).addBody(body.config);

      });
    }
  };
  var Level = function () {
    this.constants = {};
  };

  return {
    reset: function () {
      _private.children = {};
    },
    instantiate: function () {
      //console.log(_instance);
      return new Level();
    },
    create: function (id, config) {
      var obj = this.instantiate();

      Object.keys(config).forEach(function (key) {
        if (_methods.hasOwnProperty(key) && typeof _methods[key] === 'function') {
          _methods[key](obj, config[key]);
        } else if (typeof config[key] === 'function') {
          obj[key] = config[key];
        } else {
          obj.constants[key] = config[key];
        }
      });
      _private.children[id] = obj;
      return _private.children[id];
    },
    get: function (id) {
      return _private.children[id];
    },
    length: function () {
      return Object.keys(_private.children).length;
    },
  };
});
