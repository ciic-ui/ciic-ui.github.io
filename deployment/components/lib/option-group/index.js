import { OptionGroup } from 'element-ui';

/* istanbul ignore next */
OptionGroup.install = function(Vue) {
  Vue.component(OptionGroup.name, OptionGroup);
};

export default OptionGroup;
