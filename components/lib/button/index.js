import CiicButton from './src/button';

/* istanbul ignore next */
CiicButton.install = function(Vue) {
  Vue.component(CiicButton.name, CiicButton);
};

export default CiicButton;
