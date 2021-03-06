import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('impress-slide', 'Integration | Component | impress slide', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{impress-slide}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#impress-slide }}
      template block text
    {{/impress-slide}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it received all of its data attributes', function(assert) {
  this.render(hbs`{{impress-slide
    id='hello'
    classNames='world'
    x='x'
    y='y'
    z='z'
    scale='scale'
    rotate='rotate'
    rotateY='rotateY'
    rotateZ='rotatez'
    }}`);

  let dataAttrs = $('#hello').data();
  assert.equal(Object.getOwnPropertyNames(dataAttrs).length, 7, 'Slide data attributes were successfully provided');
});
