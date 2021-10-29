import CiicCollapse from './src/collapse';

/* istanbul ignore next */
CiicCollapse.install = function(Vue) {
  Vue.component(CiicCollapse.name, CiicCollapse);
};

export default CiicCollapse;

