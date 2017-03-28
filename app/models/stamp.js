import DS from 'ember-data';

export default DS.Model.extend({
  cost: DS.attr('number'),
  link: DS.attr('string'),
  monochrome_link: DS.attr('string'),
});
