'use strict';

plexi.klass('Body', function () {
  var BodyType = plexi.module('BodyType');
  var Body = function (bodytype, config) {
    this.bodytype = bodytype;
    Object.keys(this.bodytype.constants).forEach(function (key) {
      this[key] = this.bodytype.constants[key];
    }.bind(this));
    this.bodytype.properties.forEach(function (prop) {
      if (config.hasOwnProperty(prop)) {
        this[prop] = config[prop];
      } else {
        throw new Error('Required property not specified: ' + prop);
      }
    }.bind(this));
  };
  Body.prototype.dispatch = function (channel, args) {
      var n = args.shift();
      var _methods = this.bodytype;
      var fn = _methods.hasOwnProperty(n) ? _methods[n] : false;
      if (fn) {
        return fn.apply(this, args);
      }
    };

  return Body;
});
