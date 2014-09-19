'use strict';

plexi.module('Canvas', function () {
  var BodyType = plexi.module('BodyType');
  var _private = {
    children: {},
    drawMethods: {},
  };

  var _methods = {};
  var Canvas = function () {
    this.constants = {};
    this.$canvas = undefined;
    this.ctx = undefined;
    this.properties = ['id', 'width', 'height'];

  };
  Canvas.prototype.init = function () {
    var bodytypes = BodyType.children();

    Object.keys(bodytypes).forEach(function (key) {
      _private.drawMethods[key] = bodytypes[key].draw;
    });
    var ctx = this.ctx;
    this.$canvas.onmousedown = function (e) {
      plexi.publish('World', ['selectBody', ctx, e.offsetX, e.offsetY]);
    };
    return this;
  };
  Canvas.prototype.draw = function (world) {
    var ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);
    world.getBodies().forEach(function (body) {
      _private.drawMethods[body.bodytype.id](ctx, body);

    });
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
      obj.id = config.id;
      obj.properties.forEach(function (prop) {

        if (config.hasOwnProperty(prop)) {
          this[prop] = config[prop];
          //console.log(this[prop]);
        }
        else {
          throw new Error('Required property not specified: ' + prop);
        }
      }.bind(obj));
      obj.$canvas = document.getElementById(obj.id);
      if (!obj.$canvas) {
        obj.$canvas = document.createElement('canvas');
      }
      obj.ctx = obj.$canvas.getContext('2d');
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
