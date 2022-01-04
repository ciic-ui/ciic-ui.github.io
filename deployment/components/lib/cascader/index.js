import { Cascader } from 'element-ui';

/* istanbul ignore next */
Cascader.install = function(Vue) {
  Vue.component(Cascader.name, Cascader);
};

export default Cascader;
