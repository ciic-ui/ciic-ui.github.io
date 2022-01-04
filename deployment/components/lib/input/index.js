import { Input } from 'element-ui';

/* istanbul ignore next */
Input.install = function(Vue) {
  Vue.component(Input.name, Input);
};

export default Input;
