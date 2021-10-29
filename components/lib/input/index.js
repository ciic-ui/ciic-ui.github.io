import CiicInput from './src/input';

/* istanbul ignore next */
CiicInput.install = function(Vue) {
  Vue.component(CiicInput.name, CiicInput);
};

export default CiicInput;
