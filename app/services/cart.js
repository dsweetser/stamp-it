import Ember from 'ember';

export default Ember.Service.extend({

  currentOrder: null,

  createOrder(order){
    order.save()
    .then((response) => this.set('currentOrder', response ));
  },

  createListItem(stamp) {
    let order = this.get('currentOrder');
    let listItem = this.set('model', {
      stamp: stamp.id,
      order: order
    });
    console.log(listItem);
    this.get('model').save()
    .then((response) => console.log(response));
  }
});
