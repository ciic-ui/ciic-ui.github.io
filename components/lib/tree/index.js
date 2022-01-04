import { Tree } from 'element-ui';

/* istanbul ignore next */
Tree.install = function(Vue) {
  Vue.component(Tree.name, Tree);
};

export default Tree;
