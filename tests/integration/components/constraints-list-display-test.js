import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('constraints-list-display', 'Integration | Component | constraints list display', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{constraints-list-display}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#constraints-list-display}}
      template block text
    {{/constraints-list-display}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
