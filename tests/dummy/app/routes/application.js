import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      slides: [
        {
          id: "slide-setup",
          classNames: "step slide",
          x: "0",
          y: "0",
          z: "-100",
          rotateX: "-40",
          rotateY: "-10",
          scale: "2",
          component: "slide-setup"
        },
        {
          id: "slide-presentation",
          classNames: "step",
          x: "0",
          y: "0",
          rotate: "45",
          y: "-1000",
          component: 'slide-presentation'
        },
        {
          id: "slide-slide",
          classNames: "step",
          x: "1000",
          y: "-1500",
          component: 'slide-slide'
        },
        {
          id: "slide-actions",
          classNames: "step",
          x: "6200",
          y: "4300",
          z: "-100",
          rotateX: "-40",
          rotateY: "10",
          scale: "2",
          component: 'slide-actions'
        }
      ]
    }
  }
});
