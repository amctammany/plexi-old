'use strict';

plexi.module('Stage', function () {

  var _private = {
    children: [],
    currentStage: undefined,
    bodies: function (stage, bodies) {
      var BodyType = plexi.module('BodyType');
      stage.bodies = bodies.map(function (body) {
        return BodyType.get(body.type).addBody(body.config);
      });
    },

  };

  var _methods = {
    change: function (stage) {
      if (_private.children.hasOwnProperty(stage)) {
        plexi.publish('World', ['reset']);
        _private.currentStage = _private.children[stage];
        _private.currentStage.load();
      }
    },
  };

  var Stage = function () {
    this.constants = {};

  };
  Stage.prototype.load = function () {
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
      return new Stage();
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
