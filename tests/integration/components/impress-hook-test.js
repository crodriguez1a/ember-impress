import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('impress-hook', 'Integration | Component | impress hook', {
  integration: true
});

let slides = [
  {
    id: 'slide-setup',
    title: 'Setup',
    classNames: 'step slide',
    x: '0',
    y: '0',
    z: '-100',
    rotateX: '-40',
    rotateY: '-10',
    scale: '6',
    component: 'slide-setup'
  }
];

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{impress-hook}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#impress-hook}}
      template block text
    {{/impress-hook}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
