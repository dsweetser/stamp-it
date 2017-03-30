import Ember from 'ember';

export default Ember.Route.extend({
  cart: Ember.inject.service(),
  model () {
    return this.get('store').createRecord('order', {});
  },

  actions: {
    createOrder(order){
      this.get('cart').createOrder(order);
      this.transitionTo('shop');
    },
    cancel () {
      history.back();
    },
  },
});
