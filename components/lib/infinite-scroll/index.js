import { InfiniteScroll } from 'element-ui';

/* istanbul ignore next */
InfiniteScroll.install = function(Vue) {
  Vue.component(InfiniteScroll.name, InfiniteScroll);
};

export default InfiniteScroll;
