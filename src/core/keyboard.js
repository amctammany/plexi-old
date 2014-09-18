'use strict';

plexi.module('Keyboard', function () {
  var _private = {
    children: {},
    keysdown: [],
  };
  var _methods = {
  };
  var Keyboard = function () {
    this.keys = {};
  };

  return {
    reset: function () {
      _private.children = {};
      _private.keysdown = [];
    },
    instantiate: function () {
      //console.log(_instance);
      return new Keyboard();
    },
    create: function (id, config) {
      var obj = this.instantiate();

      Object.keys(config).forEach(function (key) {
        obj.keys[key] = config[key];
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
