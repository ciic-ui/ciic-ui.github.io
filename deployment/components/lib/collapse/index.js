import { Collapse } from 'element-ui';

/* istanbul ignore next */
Collapse.install = function(Vue) {
  Vue.component(Collapse.name, Collapse);
};

export default Collapse;
