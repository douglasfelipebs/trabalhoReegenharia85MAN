SearchFieldDefaultOptions.Venda = {
  field: {
    label: "Venda",
    placeholder: "Selecione um Venda",
    name: "venda_id",
    isAfField: true,
    valueStoringAttr: "data-id",
    valueAttrFormat: "[nome]",
    allowCleanBtn: true,
  },
  table: {
    tableId: "stateSaveIdVendaModal",
    tableName: "Vendas",
  },
  collection: {
    name: "vendas"
  },
  freeSearch: {
    placeholder: 'Código',
    searchAttribute: 'codigo',
    width: '90px'
  },
  updateSubscription: {
    name: "single_venda"
  },
  onSelected: function (id, options) {
    if (id) {
      Meteor.subscribe("single_venda", id);
    }
  }
};