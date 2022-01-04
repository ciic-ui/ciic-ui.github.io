import { Carousel } from 'element-ui';

/* istanbul ignore next */
Carousel.install = function(Vue) {
  Vue.component(Carousel.name, Carousel);
};

export default Carousel;
