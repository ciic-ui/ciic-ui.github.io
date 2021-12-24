import { Badge } from 'element-ui';

/* istanbul ignore next */
Badge.install = function(Vue) {
  Vue.component(Badge.name, Badge);
};

export default Badge;
