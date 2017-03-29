import Ember from 'ember';

export default Ember.Route.extend({
  createOrder(data) {
        let order = this.get('store').createRecord('order', data);
        order.save();
      },
});
