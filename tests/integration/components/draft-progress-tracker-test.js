import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('draft-progress-tracker', 'Integration | Component | draft progress tracker', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{draft-progress-tracker}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#draft-progress-tracker}}
      template block text
    {{/draft-progress-tracker}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
