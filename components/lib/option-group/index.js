import CiicOptionGroup from '../select/src/option-group';

/* istanbul ignore next */
CiicOptionGroup.install = function(Vue) {
  Vue.component(CiicOptionGroup.name, CiicOptionGroup);
};

export default CiicOptionGroup;
