import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    add () {
      return this.sendAction('add', this.get('stamp'));
    },
  },
});
