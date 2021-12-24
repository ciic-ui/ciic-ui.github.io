import { MenuItemGroup } from 'element-ui';

/* istanbul ignore next */
MenuItemGroup.install = function(Vue) {
  Vue.component(MenuItemGroup.name, MenuItemGroup);
};

export default MenuItemGroup;
