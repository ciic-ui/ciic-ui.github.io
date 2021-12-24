import { Form } from 'element-ui';

/* istanbul ignore next */
Form.install = function(Vue) {
  Vue.component(Form.name, Form);
};

export default Form;
