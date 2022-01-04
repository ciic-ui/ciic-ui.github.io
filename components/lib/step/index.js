import { Step } from 'element-ui';

/* istanbul ignore next */
Step.install = function(Vue) {
  Vue.component(Step.name, Step);
};

export default Step;
