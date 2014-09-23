'use strict';

describe('plexi', function () {
  var mod;
  beforeEach(function () {
    mod = plexi.module('mod', function (define) {
      var i = function () {
        this.x = 0;
      };
      i.prototype = {
        move: function (x) {
          return (this.x = x);
        },
      };
      var d = {

      };
      return define(i, d);
    });
  });
  it('should be true', function () {
    expect(!!plexi).toBe(true);
  });

  it('should reset', function () {
    plexi.modules().forEach(function(mod) {
      expect(mod.length()).toBe(0);
    });
  });
  it('should load config', function () {
    console.log(config);
    plexi.load(config);
    expect(!!plexi.module('BodyType')).toBe(true);
    expect(plexi.module('BodyType').length()).toBe(Object.keys(config.BodyType).length);
    expect(plexi.module('World').length()).toBe(Object.keys(config.World).length);

  });

  it('should create module', function () {

    expect(!!mod).toBe(true);
  });

  it('should fail to create module without cb function', function () {
    var module = plexi.module('foobar', {not: 'aFunction'});
    expect(!!module).toBe(false);
  });
  it('should get module', function () {
    var module = plexi.module('mod');
    expect(!!module).toBe(true);
  });

  it('should fail to get invalid module', function () {
    var module = plexi.module('foo');
    expect(!!module).toBe(false);
  });

  it('should create module instance', function () {
    var i = mod.create('i', {
      name: 'foobar'
    });
    var newX = 100;


    expect(!!i).toBe(true);
    expect(i.x).toBe(0);

    expect(i.move(newX)).toBe(newX);
    expect(i.x).toBe(newX);
  });

  it('should get (and fail to get) module instance', function () {
    var i = mod.create('i', {
      name: 'foo',
    });
    expect(mod.get('i')).toBe(i);
    expect(!!mod.get('i2')).toBe(false);
  });

  it('should increase module length upon creation', function () {
    var l0 = mod.length();
    var i = mod.create('i', {
      name: 'foo',
    });
    var l1 = mod.length();
    expect(l0+1).toBe(l1);
  });

});
