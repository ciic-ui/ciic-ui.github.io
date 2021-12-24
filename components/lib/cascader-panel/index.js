import { CascaderPanel } from 'element-ui';

/* istanbul ignore next */
CascaderPanel.install = function(Vue) {
  Vue.component(CascaderPanel.name, CascaderPanel);
};

export default CascaderPanel;
