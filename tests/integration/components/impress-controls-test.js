import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('impress-controls', 'Integration | Component | impress controls', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{impress-controls}}`);
  assert.equal(this.$().find('footer').length, 1);

  // Template block usage:
  this.render(hbs`
    {{#impress-controls}}
      template block text
    {{/impress-controls}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('Actions are yielded to consumer', function(assert) {
  this.render(hbs`
    {{#impress-controls as |prev next goto|}}
      <a {{action prev}}>Prev</a>
      <a {{action next}}>Prev</a>
      <a {{action goto}}>Goto</a>
    {{/impress-controls}}
  `);

  assert.equal(this.$().find('[data-ember-action]').length, 3, 'Prev, next and goto actions were yielded.');
});
