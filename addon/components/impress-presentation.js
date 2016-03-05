import Ember from 'ember';
import layout from '../templates/components/impress-presentation';
import computed, { alias } from 'ember-computed-decorators';

const { run } = Ember;

export default Ember.Component.extend({
  layout: layout,
  attributeBindings: ['id'],

  /**
    Now that's the core element used by impress.js.

    That's the wrapper for your presentation steps. In this element all the impress.js magic happens.
    It doesn't have to be a `<div>`. Only `id` is important here as that's how the script find it.

    You probably won't need it now, but there are some configuration options that can be set on this element.

    @property impress
    @returns String
    @public
  */
  id: 'impress',

  /**
    Signal if hint should be displayed

    @property displayHint
    @returns Boolean
    @public
  */
  displayHint: false,

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
  _hint(hints) {
    let touch = 'ontouchstart' in document.documentElement;
    return touch ? hints.touch : hints.keyboard;
  },

  /**
    You also need to call a `impress().init()` function to initialize impress.js presentation.

    @method initializeImpress
    @private
  */
  _initializeImpress() {
    //Impress uses ids, so one at a time please
    if (document.querySelectorAll('#impress').length > 1) {
      console.warn('Please clean up other presentations before intializing a new one');
    }

    //Impress is included from index.js
    impress().init();
  },

  didInsertElement() {
    this._initializeImpress();
  }
});
