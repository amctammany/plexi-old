'use strict';

describe('plexi::BodyType', function () {
  var Body = plexi.klass('Body');
  var config = {
    main: {
      id: 'game-canvas',
      width: 600,
      height: 600,
    },

    bodyTypes: {
      'player': {
        radius: 15,
        behaviors: ['particle', 'circle'],
      },
      'enemy': {
        width: 10,
        height: 10,
        behaviors: ['particle', 'rectangle'],
      }
    }
  };

  var BodyType, game, player, enemy;

  beforeEach(function () {
    game = plexi.load(config);
    BodyType = plexi.module('BodyType');
    player = BodyType.get('player');
    enemy = BodyType.get('enemy');
  });

  it('should be true', function () {
    expect(!!BodyType).toBe(true);
  });
  it('should return bodytype', function () {
    expect(enemy.constants.width).toBe(config.bodyTypes.enemy.width);
    expect(enemy.constants.height).toBe(config.bodyTypes.enemy.height);
  });

  it('should create Body on addBody()', function () {
    player = plexi.module('BodyType').get('player');
    var body = player.addBody({x: 10, y: 20});
    expect(!!body).toBe(true);
    expect(body instanceof Body).toBe(true);
    expect(body.x).toBe(10);
    expect(body.y).toBe(20);
    expect(body.radius).toBe(15);

  });

  //it('should create new instance from config', function () {
    //var type = BodyType.create(id, config);
    //expect(BodyType.type(id)).toBe(type);
  //});



});
