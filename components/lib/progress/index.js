import CiicProgress from './src/progress';

/* istanbul ignore next */
CiicProgress.install = function(Vue) {
  Vue.component(CiicProgress.name, CiicProgress);
};

export default CiicProgress;
