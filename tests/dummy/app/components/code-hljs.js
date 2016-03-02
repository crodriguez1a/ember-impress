import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'code',
  classNames: ['hljs'],
  classNameBindings: ['language'],
  didInsertElement() {
    hljs.highlightBlock(this.get('element'));
  }
});
