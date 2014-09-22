'use strict';

plexi.module('Game', function (define) {
  var _private = {
    bodytypes: function (config) {
      var BodyType = plexi.module('BodyType');
      this.bodytypes = Object.keys(config).map(function (key) {
        var t = BodyType.create(key, config[key]);
        return t;
      }.bind(this));

    },

  };
  var Game = function (id, config) {
    this.id = id;
    this.constants = {};
    Object.keys(config).forEach(function (key) {
      if (_private.hasOwnProperty(key) && _private[key] instanceof Function) {
        _private[key].call(this, config[key]);
      } else {
        this.constants[key] = config[key];
      }
    }.bind(this));

  };

  var dispatch = {


  };

  return define(Game, dispatch);
});
