'use strict';

plexi.module('Behavior', function () {
  var _private = {
    children: {},
  };
  var _methods = {
  };
  var Behavior = function () {
    this.constants = {};
  };
  Behavior.prototype.applyTo = function (bodytype) {

    this.constants.properties.forEach(function (prop) {
      if (!bodytype.constants.hasOwnProperty(prop) && bodytype.properties.indexOf(prop) === -1) {
        bodytype.properties.push(prop);
      }
    });
    //Object.keys(this.constants.methods).forEach(function (key) {
      //console.log(key);
      //bodytype.methods[key] = this.methods[key];
    //});
  };

  return {
    reset: function () {
      //_private.children = {};
    },
    instantiate: function () {
      //console.log(_instance);
      return new Behavior();
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
