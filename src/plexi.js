'use strict';

/**
 * @module plexi
 *
 */

var plexi = (function () {
  var _modules = {};
  var _dispatch = {};
  var _private = {


  };

  /**
   * @function defineModule
   * @param {Function} Instance - Constructor Function
   * @param {Object} dispatch - Public events
   * @memberof plexi
   *
   */
  function defineModule(Instance, dispatch) {
    return {
      children: {},
      create: function (id, config) {
        var i = new Instance(id, config);
        this.children[id] = i;
        return i;
      },
      get: function (id) {
        return (this.children[id] || void 0);
      },
      reset: function () {
        this.children = {};
        //Object.keys(this.children).forEach(function (c) {
          //this.children[c].reset();
        //}).bind(this);
      },
      length: function () {
        return Object.keys(this.children).length;
      }
    };
  }


  // Plexi Interface
  return {
    module: function (id, cb) {
      if (cb === void 0) {
        if (_modules[id]) {
          return _modules[id];
        } else {
          console.warn('Invalid module selected: ' + id);
        }

       } else if (typeof cb === 'function') {
         var module = cb(defineModule);
         _modules[id] = module;
         return _modules[id];
       } else {
        console.warn('Invalid callback declared for module: ' + id);
       }
    },

    modules: function () {
      return Object.keys(_modules).map(function (key) {
        if (_modules.hasOwnProperty(key)) {
          return _modules[key];
        }
      });
    },

    reset: function () {
      this.modules().forEach(function (m) {if (m.hasOwnProperty('reset')) {m.reset.call(m);}});
    },

    load: function (config) {
      Object.keys(config).forEach(function (key) {
        if (_modules.hasOwnProperty(key)) {
          Object.keys(config[key]).forEach(function (mod) {
            _modules[key].create(mod, config[key][mod]);
          });

        }
      });
    },

    clone: function () {
      this.reset();
      return Object.create(plexi);
    },

  };

})();
