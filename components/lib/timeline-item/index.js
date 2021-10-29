import CiicTimelineItem from '../timeline/src/item';

/* istanbul ignore next */
CiicTimelineItem.install = function(Vue) {
  Vue.component(CiicTimelineItem.name, CiicTimelineItem);
};

export default CiicTimelineItem;
