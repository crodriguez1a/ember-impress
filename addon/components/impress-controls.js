import Ember from 'ember';
import layout from '../templates/components/impress-controls';
import computed from 'ember-computed-decorators';

export default Ember.Component.extend({
  layout,

  /**
    Some default hints

    @property hints
    @returns Object
    @public
  */
  hints: {
    keyboard: 'Use a spacebar or arrow keys to navigate',
    touch: 'Tap on the left or right to navigate'
  },

  /**
    Hint is not related to impress.js in any way.
    But it can show you how to use impress.js features in creative way.

    @property hint
    @returns String
    @private
  */
  @computed('hints')
  hint(hints) {
    let touch = 'ontouchstart' in document.documentElement;
    return touch ? hints.touch : hints.keyboard;
  },
  actions: {

    /**
      Moves to next step of the presentation

      @method next
      @returns Class
      @public
    */
    next() {
      impress().next();
    },

    /**
      Moves to previous step of the presentation

      @method prev
      @returns Class
      @public
    */
    prev() {
      impress().prev();
    },

    /**
      Moves the presentation to the step given by its index number
      id or the DOM element; second parameter can be used to define duration of the transition in ms,
      but it's optional - if not provided default transition duration for the presentation will be used.

      @method goto
      @returns Class
      @params
        selector String (index || id || element)
        duration Number
      @public
    */
    goto(selector, duration) {
      impress().goto(selector, duration);
    }
  }
});
