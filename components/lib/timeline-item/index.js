import { TimelineItem } from 'element-ui';

/* istanbul ignore next */
TimelineItem.install = function(Vue) {
  Vue.component(TimelineItem.name, TimelineItem);
};

export default TimelineItem;
