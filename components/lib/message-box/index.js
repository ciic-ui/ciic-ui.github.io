import { MessageBox } from 'element-ui';

/* istanbul ignore next */
MessageBox.install = function(Vue) {
  Vue.component(MessageBox.name, MessageBox);
};

export default MessageBox;
