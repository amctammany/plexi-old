'use strict';

plexi.module('BodyType', function () {
  var Behavior = plexi.module('Behavior');
  var Body = plexi.klass('Body');
  var _private = {
    children: {},
  };
  var _methods = {
    behaviors: function (type, behaviors) {
      var b;
      behaviors.forEach(function (behavior) {
        b = Behavior.get(behavior);
        if (b) {
          b.applyTo(type);
        } else {
          console.warn('invalid behavior ', behavior);
        }
      });
    }
  };

  var BodyType = function () {
    this.constants = {};
    this.properties = [];
    this.bodies = [];
  };
  BodyType.prototype.addBody = function (config) {
    //var World = plexi.module('World');
    var body = new Body(this, config);
    //World.addBody(body);
    this.bodies.push(body);
    return body;
  };

  BodyType.prototype.drawAll = function (ctx) {
    if (this.draw) {
      this.bodies.forEach(function (body) {
        this.draw(ctx, body);
      }.bind(this));
    }
  };
  return {
    reset: function () {
      _private.children = {};
    },
    instantiate: function () {
      return new BodyType();
    },
    create: function (id, config) {
      var obj = this.instantiate();
      for (var key in config) {
        if (_methods.hasOwnProperty(key) && typeof _methods[key] === 'function') {
          _methods[key](obj, config[key]);
        } else {
          obj.constants[key] = config[key];
        }
      }
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
