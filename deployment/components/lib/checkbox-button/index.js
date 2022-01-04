import { CheckboxButton } from 'element-ui';

/* istanbul ignore next */
CheckboxButton.install = function(Vue) {
  Vue.component(CheckboxButton.name, CheckboxButton);
};

export default CheckboxButton;
