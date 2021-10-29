import CiicTableColumn from '../table/src/table-column';

/* istanbul ignore next */
CiicTableColumn.install = function(Vue) {
  Vue.component(CiicTableColumn.name, CiicTableColumn);
};

export default CiicTableColumn;
