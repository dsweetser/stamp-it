import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('app-stamp/delete', 'Integration | Component | app stamp/delete', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{app-stamp/delete}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#app-stamp/delete}}
      template block text
    {{/app-stamp/delete}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
