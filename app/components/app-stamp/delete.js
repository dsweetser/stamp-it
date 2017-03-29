import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete () {
      return this.sendAction('delete', this.get('stamp'));
    },
  }
});
