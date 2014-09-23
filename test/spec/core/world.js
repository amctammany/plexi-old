'use strict';

describe('plexi::World', function () {
  var World, w;

  var conf = {
    damping: 0.01,
    vib: 125,
  };

  beforeEach(function () {
    plexi = plexi.clone();
    World = plexi.module('World');
    plexi.module('BodyType').create('hero', {
      width: 10,
      height: 20
    });
    w = World.create('main', conf);
  });

  it('should be true', function () {
    expect(!!World).toBe(true);
  });

  it('should create new World', function () {
    expect(!!w).toBe(true);
    expect(w.damping).toBe(conf.damping);
    expect(w.constants.vib).toBe(conf.vib);
  });

  it('should add body to world', function () {
    var l0 = w.bodies.length;
    var b = w.addBody('hero', {x: 10, y: 20});
    var l1 = w.bodies.length;
    expect(l0+1).toBe(l1);
    expect(b.bodytype).toBe('hero');
    expect(b.x).toBe(10);
    expect(b.y).toBe(20);

    expect(w.bodies[0]).toBe(b);
  });

  it('should have same prototype between bodies of same type', function () {
    var b0 = w.addBody('hero', {x: 10, y: 10});
    var b1 = w.addBody('hero', {x: 20, y: 20});

    var proto = {reset: function () {return false;}};
    expect(b0.prototype).toBe(b1.prototype);
    expect(b0.prototype).not.toBe(proto);
    expect(b1.prototype).not.toBe(proto);
  });
});
