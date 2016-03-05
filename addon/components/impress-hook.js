import Ember from 'ember';
import layout from '../templates/components/impress-hook';

const { run } = Ember;

export default Ember.Component.extend({
  layout,
  tagName: '',

  /**
    Only one current step has the `present` class.

    @property currentStep
    @returns String
    @private
  */
  currentStep: null,

  /**
    Impress init hook

    @method _didInitImpress
    @private
  */
  _updatePresent() {
    if (document.querySelector('.present')) {
      this.set('currentStep', (document.querySelector('.present')).getAttribute('id'));
    }
  },

  /**
    Use window hashchange event instead of Ember router as not to conflate Impress location update with Ember Routing

    @method _listenForImpressHash
    @private
  */
  _listenForImpressHash() {
    window.addEventListener("hashchange", () => {
      this._updatePresent();
    });
  },

  /**
    Listen for impress custom init event

    @method _listenForImpress
    @private
  */
  _listenForImpress() {
    document.addEventListener("impress:init", (e) => {
      run.later(() => {
        this.set('didInit', true);
        this._updatePresent();
      }, 800);
    });
  },

  didInsertElement() {
    this._listenForImpress();
    this._listenForImpressHash();
  }
});
