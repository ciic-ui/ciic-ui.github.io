import CiicDialog from './src/component';

/* istanbul ignore next */
CiicDialog.install = function(Vue) {
  Vue.component(CiicDialog.name, CiicDialog);
};

export default CiicDialog;
