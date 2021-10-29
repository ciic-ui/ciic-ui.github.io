import CiicOption from '../select/src/option';

/* istanbul ignore next */
CiicOption.install = function(Vue) {
  Vue.component(CiicOption.name, CiicOption);
};

export default CiicOption;
