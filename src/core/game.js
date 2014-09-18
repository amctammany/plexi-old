'use strict';

plexi.module('Game', function () {
  var Game = function () {
    this.world = plexi.module('World');
  };
  var _animLoop, _animFn;
  Game.prototype.start = function () {
    _private.paused = false;
    _animFn = this.animate.bind(this);
    this.animate();
  };
  Game.prototype.animate = function () {
    this.advance();

    _animLoop = window.requestAnimationFrame(_animFn);

  };

  Game.prototype.draw = function () {
    this.canvii[0].draw(this.world);
  };

  Game.prototype.advance = function (delta) {
    this.world.integrate(delta);
    this.draw();
  };
  var _private = {
    paused: true,
    constants: {},
    canvas: function (config) {
      var Canvas = plexi.module('Canvas');
      this.canvii = Object.keys(config).map(function (key) {
        var c = Canvas.create(key, config[key]);
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
        if (config.hasOwnProperty(key)) {

          if (typeof _private[key] !== 'function') {
            _private.constants[key] = config[key];
          } else {
            _private[key].call(game, config[key]);
          }
        }

      });
      return game;

    },
  };

});
