import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('app-stamp/add', 'Integration | Component | app stamp/add', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{app-stamp/add}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#app-stamp/add}}
      template block text
    {{/app-stamp/add}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
