import CiicTable from './src/table';

/* istanbul ignore next */
CiicTable.install = function(Vue) {
  Vue.component(CiicTable.name, CiicTable);
};

export default CiicTable;
