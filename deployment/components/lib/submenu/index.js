import { Submenu } from 'element-ui';

/* istanbul ignore next */
Submenu.install = function(Vue) {
  Vue.component(Submenu.name, Submenu);
};

export default Submenu;
