'use strict';

plexi.module('Canvas', function () {
  var _private = {
    children: {},
  };

  var _methods = {};
  var Canvas = function () {
    this.constants = {};
    this.properties = ['id', 'width', 'height'];
  };
  return {
    reset: function () {
      _private.children = {};
    },
    instantiate: function () {
      return new Canvas();
    },
    create: function (id, config) {
      var obj = this.instantiate();
      obj.properties.forEach(function (prop) {
        if (config.hasOwnProperty(prop)) {
          this[prop] = config[prop];
        }
        else {
          throw new Error('Required property not specified: ' + prop);
        }
      }.bind(this));
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


  return {
    create: function (config) {
      return {
        width: 500,
        height: 500,
      };
    },
    reset: function () {

    },
  };

});
