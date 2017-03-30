import Ember from 'ember';

export default Ember.Service.extend({
  currentOrder: null,

  createOrder(order){
    order.save()
    .then((response) => this.set('currentOrder', Ember.get(response, 'id')));
  },
});
