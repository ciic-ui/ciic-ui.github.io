import CiicBreadcrumb from './src/breadcrumb';

/* istanbul ignore next */
CiicBreadcrumb.install = function(Vue) {
  Vue.component(CiicBreadcrumb.name, CiicBreadcrumb);
};

export default CiicBreadcrumb;
