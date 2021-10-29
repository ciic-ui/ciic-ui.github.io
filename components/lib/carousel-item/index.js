import CiicCarouselItem from '../carousel/src/item';

/* istanbul ignore next */
CiicCarouselItem.install = function(Vue) {
  Vue.component(CiicCarouselItem.name, CiicCarouselItem);
};

export default CiicCarouselItem;
