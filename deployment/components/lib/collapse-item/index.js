import { CollapseItem } from 'element-ui';

/* istanbul ignore next */
CollapseItem.install = function(Vue) {
  Vue.component(CollapseItem.name, CollapseItem);
};

export default CollapseItem;
