'use strict';

plexi.module('Game', function () {
  var Game = function () {
    this.world = plexi.module('World');

  };
  Game.prototype.draw = function () {
    var canvas = this.canvii[0];
    var ctx = canvas.ctx;
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.bodyTypes.forEach(function (t) {
      t.drawAll(ctx);
    });

  };
  var _private = {
    constants: {},
    canvas: function (config) {
      var Canvas = plexi.module('Canvas');
      this.canvii = Object.keys(config).map(function (key) {
        console.log(config[key]);
        var c = Canvas.create(config[key].id, config[key]);
        c.game = this;
        return c;
      }.bind(this));
      //return Canvas.create(config);
    },

    levels: function (config) {
      var Level = plexi.module('Level');
      this.levels = Object.keys(config).map(function (key) {
        var l = Level.create(key, config[key]);
        l.game = this;
        return l;
      }.bind(this));
    },

    bodyTypes: function (config) {
      var BodyType = plexi.module('BodyType');
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
