'use strict';

plexi.module('Mouse', function () {
  var _private = {
    currentMouse: undefined,
    children: {},
    dragstart: {x: undefined, y: undefined},
  };
  var _methods = {
    mousedown: function (ctx, e) {
      var x = e.offsetX, y = e.offsetY;
      var vars = {
        ctx: ctx,
        x: x,
        y: y,
      }
      var event = _private.currentMouse.events.mousedown;
      var newEvent = event.map(function (a) {
        if (a[0] === '@') {
          return vars[a.slice(1)];
        } else {
          return a;
        }
      });
      plexi.publish(newEvent);

      //var body = plexi.evaluate(['World', 'selectBody', ctx, x, y]);
      //
      //console.log(e);
    },

    changeSetup: function (id) {
      if (_private.children[id]) {
        _private.currentMouse = _private.children[id];
      }
    }


  };
  var Mouse = function () {
    this.events = {};
  };

  Mouse.prototype.init = function () {
    _private.currentMouse = this;
  };

  return {
    reset: function () {
      _private.currentMouse = undefined;
      _private.children = {};
      _private.dragstart = {x: undefined, y: undefined};
    },
    instantiate: function () {
      //console.log(_instance);
      return new Mouse();
    },
    create: function (id, config) {
      var obj = this.instantiate();

      Object.keys(config).forEach(function (key) {
        obj[key] = config[key];
      });
      _private.children[id] = obj;
      return _private.children[id];
    },
    dispatch: function (channel, args) {
      var n = args.shift();
      var fn = _methods.hasOwnProperty(n) ? _methods[n] : false;
      if (fn) {
        return fn.apply(null, args);
      }
    },

    get: function (id) {
      return _private.children[id];
    },
    length: function () {
      return Object.keys(_private.children).length;
    },
  };
});
