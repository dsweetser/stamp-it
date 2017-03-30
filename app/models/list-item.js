import DS from 'ember-data';

export default DS.Model.extend({
  order: DS.attr('number'),
  stamp: DS.attr('number'),
});
