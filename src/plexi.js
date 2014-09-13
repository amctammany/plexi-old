'use strict';

var loaded = true;
var plexi = (function () {
  var _modules = {};
  var _klasses = {};
  var _private = {
    _currentGame: undefined,
    loadConfig: function loadConfig (config) {
      this._currentGame = plexi.module('Game').load(config);
      return this._currentGame;
    },
    resetModules: function () {
      for (var key in _modules) {
        //console.log(_modules[key]);
        var module = plexi.module(key);
        if (module) {module.reset();}
      }
    },
  };

  return {

    reset: function () {
      return _private.resetModules();
    },
    module: function (id, config) {
      var module;
      if (config === undefined) {
        if (_modules.hasOwnProperty(id)) {
          module = _modules[id];
        } else {
          //console.error('invalid module id');
        }
      } else {
        _modules[id] = config();
        module = _modules[id];
      }

      return module;
    },

    clone: function (obj) {
      var a = {};
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          a[key] = obj[key];
        }
      }
      return a;
    },
    klass: function (id, config) {
      var klass;
      if (config === undefined) {
        if (_klasses.hasOwnProperty(id)) {
          klass = _klasses[id];
        } else {
          //console.error('invalid module id');
        }
      } else {
        _klasses[id] = config();
        klass = _klasses[id];
      }

      return klass;
    },

    game: function () {
      return _private._currentGame;
    },

    load: function (config) {
      if (loaded) {
        _private.resetModules();
      }
      return _private.loadConfig(config);
    },
  };

})();
