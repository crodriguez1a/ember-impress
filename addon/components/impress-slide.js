import Ember from 'ember';
import layout from '../templates/components/impress-slide';
import computed, { alias } from 'ember-computed-decorators';

export default Ember.Component.extend({
  layout: layout,
  attributeBindings: ['id', 'x:data-x', 'y:data-y', 'z:data-z', 'scale:data-scale', 'rotate:data-rotate', 'rotateY:data-rotate-y', 'rotateZ:data-rotate-z', 'perspective: data-perspective'],

  /**
    Create an alias for the component path as not to confuse the path with the component itself

    @property _componentPath
    @returns String
    @private
  */
  @alias('component') _componentPath
});
