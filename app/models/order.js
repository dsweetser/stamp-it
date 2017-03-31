import DS from 'ember-data';

export default DS.Model.extend({
  paid: DS.attr('boolean', { defaultValue: false }),
  total: DS.attr('number', { defaultValue: 0 }),
  shippingAddress: DS.attr('string'),
  billingAddress: DS.attr('string'),
  list_items: DS.hasMany('list-item'),
});
