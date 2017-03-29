import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').createRecord('stamp', {});
  },

  actions: {
    createStamp(stamp){
      stamp.save()
      .then(() => this.transitionTo('stamps'));
    },
    cancel () {
      history.back();
    },
  },
});
