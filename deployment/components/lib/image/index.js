import { Image } from 'element-ui';

/* istanbul ignore next */
Image.install = function(Vue) {
  Vue.component(Image.name, Image);
};

export default Image;
