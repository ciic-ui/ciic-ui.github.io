import CiicDropdownItem from '../dropdown/src/dropdown-item';

/* istanbul ignore next */
CiicDropdownItem.install = function(Vue) {
  Vue.component(CiicDropdownItem.name, CiicDropdownItem);
};

export default CiicDropdownItem;
