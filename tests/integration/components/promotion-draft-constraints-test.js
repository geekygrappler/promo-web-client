import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('promotion-draft-constraints', 'Integration | Component | promotion draft constraints', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{promotion-draft-constraints}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#promotion-draft-constraints}}
      template block text
    {{/promotion-draft-constraints}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
