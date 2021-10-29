import CiicMenuItem from '../menu/src/menu-item';

/* istanbul ignore next */
CiicMenuItem.install = function(Vue) {
  Vue.component(CiicMenuItem.name, CiicMenuItem);
};

export default CiicMenuItem;
