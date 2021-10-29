import CiicForm from './src/form';

/* istanbul ignore next */
CiicForm.install = function(Vue) {
  Vue.component(CiicForm.name, CiicForm);
};

export default CiicForm;
