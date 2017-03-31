import Ember from 'ember';

export default Ember.Route.extend({
  cart: Ember.inject.service(),

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
  addStampToOrder(stamp) {
    let newListItem = this.store.createRecord('list-item');
    Ember.set(newListItem,'stamp', stamp);
    Ember.set(newListItem,'order', this.get('cart.currentOrder'));
    newListItem.save().catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Do you have a cart selected?');
      });
    },
  },
});
