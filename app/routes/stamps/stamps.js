import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('stamp');
  },
actions: {
  deleteStamp(stamp) {
    stamp.destroyRecord()
    .catch(() => {
      this.get('flashMessages')
      .danger('That stamp has been used for an order and cannot be deleted.');
    });
  },
  },
});
