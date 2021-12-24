import { Option } from 'element-ui';

/* istanbul ignore next */
Option.install = function(Vue) {
  Vue.component(Option.name, Option);
};

export default Option;
