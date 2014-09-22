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
      //reset: function () {
        //Object.keys(this.children).forEach(function (c) {
          //this.children[c].reset();
        //}).bind(this);
      //},
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

  };

})();
