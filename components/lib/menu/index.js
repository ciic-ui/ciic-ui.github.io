import CiicMenu from './src/menu';

/* istanbul ignore next */
CiicMenu.install = function(Vue) {
  Vue.component(CiicMenu.name, CiicMenu);
};

export default CiicMenu;
