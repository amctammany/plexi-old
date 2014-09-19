'use strict';

plexi.module('Game', function () {
  var Game = function () {
    this.world = plexi.module('World');
  };
  var _animLoop, _animFn;
  Game.prototype.start = function () {
    var Stage = plexi.module('Stage');
    (_private.constants.defaultStage ? Stage.get(_private.constants.defaultStage) : this.stages[0]).load();
    var Canvas = plexi.module('Canvas');
    (_private.constants.defaultCanvas ? Canvas.get(_private.constants.defaultCanvas) : this.canvii[0]).init();
    //this.stages[0].load();
    _private.paused = false;
    _animFn = this.animate.bind(this);
    _animFn();
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
  Game.prototype.loadLevel = function (id) {
    this.world.reset();
    var Level = plexi.module('Level');
    if (!this.levels.hasOwnProperty(id)) { return false; }
    var l = Level.create(id, this.levels[id]);
    return l;
  };
  var _private = {
    paused: true,
    constants: {defaultStage: 'level-select'},
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
        //return config[key];
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
    keyboards: function (config) {
      var Keyboard = plexi.module('Keyboard');
      this.keyboards = Object.keys(config).map(function (key) {
        var k = Keyboard.create(key, config[key]);
        k.game = this;
        return k;
      }.bind(this));
    },
    stages: function (config) {
      var Stage = plexi.module('Stage');
      this.stages = Object.keys(config).map(function (key) {
        var s = Stage.create(key, config[key]);
        s.game = this;
        return s;
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
