'use strict';

describe('plexi::BodyType', function () {
  var BodyType, type;

  beforeEach(function () {
    BodyType = plexi.module('BodyType');
    type = BodyType.create('hero', {
      radius: 15,
      states: {
        'ready': [['fillStyle', 'black']],
        'selected': [['fillStyle', 'red']],
      }
    });

  });

  it('should be true', function () {
    expect(!!BodyType).toBe(true);
  });

  it('should create new BodyType', function () {
    expect(!!type).toBe(true);
  });
});
