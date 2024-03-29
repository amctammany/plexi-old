var config = {
  World: {
    'main': {

    },
  },

  BodyType: {
    'hero': {
      behaviors: ['rectangle', 'selectable'],
      width: 20,
      height: 20,

      states: {
        'ready': [
          ['fill', 'blue'],
          ['stroke', 'green']
        ],
        'selected': [
          ['fill', 'red'],
          ['stroke', 'black']
        ]
      }
    },
    'enemy': {
      behaviors: ['circle', 'selectable'],
      radius: 15,
      states: {
        'ready': [
          ['fill', 'blue'],
          ['stroke', 'green']
        ],
        'selected': [
          ['fill', 'red'],
          ['stroke', 'black']
        ]
      }
    },

  },

  Mouse: {
    'default': {
      events: {
        'mousedown': ['World', 'select', '@x', '@y'],
      }
    }
  },

  Game: {
    'main': {
      current: {
        World: 'main',
        Mouse: 'default',
      }
    }
  }
};
var plexi = plexi.clone();
