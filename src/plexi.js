'use strict';

var loaded = true;
var plexi = (function () {
  var _modules = {};
  var _klasses = {};
  var _dispatch = {};
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
    dispatch: (function (obj) {
      var channels = {};
      var uid = -1;

      obj.publish = function (args) {
        args = args.slice();
        console.log(args);
        var channel = args.shift();
        if (!channels[channel]) {
          return false;
        }
        var subscribers = channels[channel],
            l = subscribers ? subscribers.length : 0;
        while(l--) {
          subscribers[l].func(channel, args);
        }
      };

      obj.evaluate = function (args) {
        var channel = args.shift();
        if (!channels[channel]) {
          return false;
        }
        return channels[channel][0].func(channel, args);
      };

      obj.subscribe = function (channel, func) {
        if (!channels[channel]) {
          channels[channel] = [];
        }
        var token = (++uid).toString();
        channels[channel].push({
          token: token,
          func: func,
        });
        return token;
      };

      obj.unsubscribe = function (token) {
        for (var c in channels) {
          if (channels[c]) {
            for (var i = 0, j = channels[c].length; i < j; i++){
              if (channels[c][i].token === token) {
                channels[c].splice(i, 1);
                return token;
              }
            }
          }
        }
        return this;
      };
      return obj;

    })(_dispatch)
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
        _private.dispatch.subscribe(id, module.dispatch);
      }

      return module;
    },

    publish: function (args) {
      return _private.dispatch.publish(args);
    },
    evaluate: function (args) {
      return _private.dispatch.evaluate(args);
    },
    subscribe: function (channel, func) {
      return _private.dispatch.subscribe(channel, func);
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
