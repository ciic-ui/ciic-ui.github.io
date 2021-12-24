import { DropdownItem } from 'element-ui';

/* istanbul ignore next */
DropdownItem.install = function(Vue) {
  Vue.component(DropdownItem.name, DropdownItem);
};

export default DropdownItem;
