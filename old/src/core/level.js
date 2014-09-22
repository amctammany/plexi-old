'use strict';

plexi.module('Level', function () {
  var _private = {
    currentLevel: undefined,
    children: {},
    bodies: function (level, bodies) {
      var BodyType = plexi.module('BodyType');
      level.bodies = bodies.map(function (body) {
        return BodyType.get(body.type).addBody(body.config);
      });
    },

  };
  var _methods = {
    load: function (level) {
      _private.currentLevel = level;
      //plexi.publish('World', ['reset']);
      if (_private.children.hasOwnProperty(level)) {
        _private.children[level].load();
      }
    },
    reset: function () {
      _methods.load(_private.currentLevel);
    },
  };
  var Level = function () {
    this.constants = {};
  };

  Level.prototype.load = function () {
    var config = this.config;
    var obj = this;
    if (!config) { return false; }

    Object.keys(config).forEach(function (key) {
        if (_private.hasOwnProperty(key) && typeof _private[key] === 'function') {
          _private[key](obj, config[key]);
        } else if (typeof config[key] === 'function') {
          obj[key] = config[key];
        } else {
          obj.constants[key] = config[key];
        }
    });
  };

  return {
    reset: function () {
      _private.children = {};
    },
    dispatch: function (channel, args) {
      var n = args.shift();
      var fn = _methods.hasOwnProperty(n) ? _methods[n] : false;
      if (fn) {
        fn.apply(null, args);
      }
    },
    instantiate: function () {
      //console.log(_instance);
      return new Level();
    },
    create: function (id, config) {
      var obj = this.instantiate();
      obj.config = config;

      //Object.keys(config).forEach(function (key) {
        //if (_methods.hasOwnProperty(key) && typeof _methods[key] === 'function') {
          //_methods[key](obj, config[key]);
        //} else if (typeof config[key] === 'function') {
          //obj[key] = config[key];
        //} else {
          //obj.constants[key] = config[key];
        //}
      //});
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
