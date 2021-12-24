import { FormItem } from 'element-ui';

/* istanbul ignore next */
FormItem.install = function(Vue) {
  Vue.component(FormItem.name, FormItem);
};

export default FormItem;
