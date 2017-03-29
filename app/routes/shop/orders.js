import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('order');
  },

  actions: {
    confirmOrder (order) {
      order.toggleProperty('paid');
      order.save()
      .then(() => this.transitionTo('shop.orders'));
    },
  }
});
