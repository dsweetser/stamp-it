import DS from 'ember-data';

export default DS.Model.extend({
  cost: DS.attr('number', { defaultValue: 10 }),
  link: DS.attr('string'),
  monochrome_link: DS.attr('string'),
  listItemId: DS.hasMany('list-item', { async: true }),
});
