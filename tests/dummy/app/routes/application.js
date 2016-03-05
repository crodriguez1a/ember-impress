import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      slides: [
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
        },
        {
          id: 'slide-presentation',
          title: 'impress-presentation',
          classNames: 'step',
          x: '0',
          y: '-1000',
          rotate: '45',
          scale: '1',
          component: 'slide-presentation'
        },
        {
          id: 'slide-slide',
          title: 'impress-slide',
          classNames: 'step',
          x: '-4000',
          y: '-5500',
          scale: '6',
          component: 'slide-slide'
        },
        {
          id: 'slide-controls',
          title: 'impress-controls',
          classNames: 'step',
          x: '6200',
          y: '4300',
          z: '-100',
          rotateX: '-40',
          rotateY: '10',
          scale: '1',
          component: 'slide-controls'
        },
        {
          id: 'slide-hook',
          title: 'impress-hook',
          classNames: 'step',
          x: '-6200',
          y: '-1000',
          rotate: '45',
          scale: '6',
          component: 'slide-hook'
        }
      ]
    };
  }
});
