'use strict';

plexi.klass('Body', function () {
  var BodyType = plexi.module('BodyType');
  var Body = function (bodytype, config) {
    this.bodytype = bodytype;
    var props = this.bodytype.properties.slice();
    Object.keys(this.bodytype.constants).forEach(function (key) {
      this[key] = this.bodytype.constants[key];
    }.bind(this));
    props.forEach(function (prop) {
      if (config.hasOwnProperty(prop)) {
        this[prop] = config[prop];
      } else {
        throw new Error('Required property not specified: ' + prop);
      }
    }.bind(this));
  };

  return Body;
});
