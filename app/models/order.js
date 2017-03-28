import DS from 'ember-data';

export default DS.Model.extend({
  paid: DS.attr('boolean'),
  total: DS.attr('number'),
  shippingAddress: DS.attr('string'),
  billingAddress: DS.attr('string'),
});
