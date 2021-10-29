import CiicTabs from './src/tabs';

/* istanbul ignore next */
CiicTabs.install = function(Vue) {
  Vue.component(CiicTabs.name, CiicTabs);
};

export default CiicTabs;
