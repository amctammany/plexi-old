'use strict';

plexi.module('Game', function () {
  var BodyType = plexi.module('BodyType');
  var Canvas = plexi.module('Canvas');
  var Game = function () {

  };
  var _private = {
    constants: {},
    canvas: function (config) {
      this.canvii = Object.keys(config).map(function (key) {
        var c = Canvas.create(key, config[key]);
        c.game = this;
        return c;
      }.bind(this));
      //return Canvas.create(config);
    },

    bodyTypes: function (config) {
      this.bodyTypes = Object.keys(config).map(function (key) {
        var t = BodyType.create(key, config[key]);
        t.game = this;
        return t;
      }.bind(this));
    },


  };

  return {
    instantiate: function () {
      return new Game();
    },
    reset: function () {

    },
    load: function (config) {
      var game = this.instantiate();
      plexi.reset();
      Object.keys(config).forEach(function (key) {
        if (typeof _private[key] !== 'function') {
          _private.constants[key] = config[key];
        } else {
          _private[key].call(game, config[key]);
        }

      });
      return game;

    },
  };

});
