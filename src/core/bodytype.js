'use strict';

plexi.module('BodyType', function (define) {
  var _private = {
    states: function (config) {
      console.log(config);
    },

  };

  var BodyType = function (id, config) {
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

  return define(BodyType, dispatch);

});
