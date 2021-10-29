import CiicTag from './src/tag';

/* istanbul ignore next */
CiicTag.install = function(Vue) {
  Vue.component(CiicTag.name, CiicTag);
};

export default CiicTag;
