import { TabPane } from 'element-ui';

/* istanbul ignore next */
TabPane.install = function(Vue) {
  Vue.component(TabPane.name, TabPane);
};

export default TabPane;
