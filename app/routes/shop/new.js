import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').createRecord('order', {});
  },

  actions: {
    createOrder(order){
      order.save()
      .then(() => this.transitionTo('shop'));
    },
    cancel () {
      history.back();
    },
  },
});
