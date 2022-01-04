import { BreadcrumbItem } from 'element-ui';

/* istanbul ignore next */
BreadcrumbItem.install = function(Vue) {
  Vue.component(BreadcrumbItem.name, BreadcrumbItem);
};

export default BreadcrumbItem;
