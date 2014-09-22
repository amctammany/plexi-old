'use strict';

var Behavior = plexi.module('Behavior');

Behavior.create('selectable', {
  properties: ['status', 'states'],
  methods: ['select', 'unselect'],

  select: function (body) {
    plexi.publish(body.bodytype.constants.actions.select);
    body.bodytype.changeState(body, 'selected');
    body.token = plexi.subscribe('selectedBody', body.dispatch.bind(body));
  },
  unselect: function (body) {
    this.bodytype.changeState(this, 'ready');
    plexi.unsubscribe(this.token);
  },

});
