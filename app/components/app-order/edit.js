import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      this.sendAction('save', this.get('order'));
    },
    cancel() {
      this.get('order').rollbackAttributes();
      this.sendAction('cancel');
    },
  },
});
