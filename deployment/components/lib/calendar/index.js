import { Calendar } from 'element-ui';

/* istanbul ignore next */
Calendar.install = function(Vue) {
  Vue.component(Calendar.name, Calendar);
};

export default Calendar;
