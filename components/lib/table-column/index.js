import { TableColumn } from 'element-ui';

/* istanbul ignore next */
TableColumn.install = function(Vue) {
  Vue.component(TableColumn.name, TableColumn);
};

export default TableColumn;
