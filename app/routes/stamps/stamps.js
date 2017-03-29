import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('stamp');
  },
actions: {
  deleteStamp(stamp) {
    stamp.destroyRecord();
  },
  },
});
