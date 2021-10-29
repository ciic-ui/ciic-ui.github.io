import CiicAutocomplete from './src/autocomplete';

/* istanbul ignore next */
CiicAutocomplete.install = function(Vue) {
  Vue.component(CiicAutocomplete.name, CiicAutocomplete);
};

export default CiicAutocomplete;
