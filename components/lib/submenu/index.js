import CiicSubmenu from '../menu/src/submenu';

/* istanbul ignore next */
CiicSubmenu.install = function(Vue) {
  Vue.component(CiicSubmenu.name, CiicSubmenu);
};

export default CiicSubmenu;
