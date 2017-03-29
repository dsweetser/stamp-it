import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('shop/new-order.js', 'Integration | Component | shop/new order.js', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{shop/new-order.js}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#shop/new-order.js}}
      template block text
    {{/shop/new-order.js}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
