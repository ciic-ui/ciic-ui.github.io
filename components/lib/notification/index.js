import { Notification } from 'element-ui';

/* istanbul ignore next */
Notification.install = function(Vue) {
  Vue.component(Notification.name, Notification);
};

export default Notification;
