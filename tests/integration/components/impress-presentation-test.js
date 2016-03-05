import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('impress-presentation', 'Integration | Component | impress presentation', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{impress-presentation}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#impress-presentation}}
      template block text
    {{/impress-presentation}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('impress was initialized', function(assert) {
  this.render(hbs`
    {{#impress-presentation}}
      template block text
    {{/impress-presentation}}
  `);
  
  assert.equal($('body').hasClass('impress-supported'), true, 'Impress has altered the DOM');
});
