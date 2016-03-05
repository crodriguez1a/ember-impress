import Ember from 'ember';
import computed from 'ember-computed-decorators';

export default Ember.Controller.extend({

  /**
    Assembled menu from slides model

    @property menu
    @returns Array
    @public
  */
  @computed('model.slides.[]')
  menu(slides) {
    return Ember.A(slides.map((slide, index) => {
      return Ember.Object.create({
        id: slide.id,
        title: slide.title,
        isActive: location && location === slide.id || index === 0
      });
    }));
  },

  actions: {
    /**
      Update hash

      @method navigate
      @public
    */
    navigate(item) {
      window.location.hash = item.get('id');
    }
  }
});
