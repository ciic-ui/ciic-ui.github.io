import { Popconfirm } from 'element-ui';

/* istanbul ignore next */
Popconfirm.install = function(Vue) {
  Vue.component(Popconfirm.name, Popconfirm);
};

export default Popconfirm;
