'use strict';

plexi.module('Game', function (define) {
  var _private = {
    current: function (config) {
      var module, instance;
      Object.keys(config).forEach(function (key) {
        module = plexi.module(key);
        if (module) {
          instance = module.get(config[key]);
          return instance;
        }
      })
    }

  };
  var Game = function (id, config) {
    this.id = id;
    this.constants = {};
    this.current = {};
    Object.keys(config).forEach(function (key) {
      if (_private.hasOwnProperty(key) && _private[key] instanceof Function) {
        _private[key].call(this, config[key]);
      } else {
        this.constants[key] = config[key];
      }
    }.bind(this));
  };

  Game.prototype.reset = function () {
    console.log('reset game: ' + this);
  };

  var dispatch = {


  };

  return define(Game, dispatch);
});
