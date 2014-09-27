'use strict';
/**
 * @module BodyType
 */

plexi.module('BodyType', function (define) {
  var _private = {
    /**
     * @function
     * @param {Object} config Configuration Object
     * @memberof BodyType
     */
    states: function (config) {
      //console.log(config);
    },

  };

  /**
   * BodyType
   * @class BodyType
   * @constructor
   * @param {String} id Identifier foobar
   * @param {Object} config Configuration object
   * @memberof BodyType
   */

  var BodyType = function (id, config) {
    this.id = id;
    this.constants = {};
    this.methods = [];
    this.proto = {};
    Object.keys(config).forEach(function (key) {
      if (_private.hasOwnProperty(key) && _private[key] instanceof Function) {
        _private[key].call(this, config[key]);
      } else {
        this.constants[key] = config[key];
      }
    }.bind(this));

  };
  var Body = function () {

  };

  BodyType.prototype.createBody = function (config) {
    var body = new Body();
    body.constants = this.constants;
    body.prototype = this.proto;
    body.bodytype = this.id;
    Object.keys(config).forEach(function (key) {
      body[key] = config[key];
    });

    return body;

  };

  BodyType.prototype.reset = function () {
    console.log('reset bodytype: ' + this.id);
  };

  var dispatch = {

  };

  return define(BodyType, dispatch);

});
