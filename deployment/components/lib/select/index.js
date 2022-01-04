import { Select } from 'element-ui';

/* istanbul ignore next */
Select.install = function(Vue) {
  Vue.component(Select.name, Select);
};

export default Select;
