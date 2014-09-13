'use strict';

plexi.module('Canvas', function () {
  var _private = {
    children: {},
  };

  var _methods = {};
  var Canvas = function () {
    this.constants = {};
    this.$canvas = undefined;
    this.ctx = undefined;
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
      //if (document) {
        obj.$canvas = document.getElementById(this.id);
        obj.ctx = obj.$canvas.getContext('2d');
        console.log(obj.ctx)
      //}
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
