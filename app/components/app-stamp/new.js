import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      this.sendAction('save', this.get('stamp'));
    },
    cancel() {
      // this.get('stamp').rollbackAttributes();
      this.sendAction('cancel');
    },
  },
});
