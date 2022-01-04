import { Tabs } from 'element-ui';

/* istanbul ignore next */
Tabs.install = function(Vue) {
  Vue.component(Tabs.name, Tabs);
};

export default Tabs;
