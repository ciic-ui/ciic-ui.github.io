import CiicDropdownMenu from '../dropdown/src/dropdown-menu';

/* istanbul ignore next */
CiicDropdownMenu.install = function(Vue) {
  Vue.component(CiicDropdownMenu.name, CiicDropdownMenu);
};

export default CiicDropdownMenu;
