import { CheckboxGroup } from 'element-ui';

/* istanbul ignore next */
CheckboxGroup.install = function(Vue) {
  Vue.component(CheckboxGroup.name, CheckboxGroup);
};

export default CheckboxGroup;
