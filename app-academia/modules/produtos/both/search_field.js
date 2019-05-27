SearchFieldDefaultOptions.Produto = {
  field: {
    label: "Produto",
    placeholder: "Selecione um Produto",
    name: "produto_id",
    isAfField: true,
    valueStoringAttr: "data-id",
    valueAttrFormat: "[nome]",
    allowCleanBtn: true,
  },
  table: {
    tableId: "stateSaveIdProdutoModal",
    tableName: "Produtos",
  },
  collection: {
    name: "produtos"
  },
  freeSearch: {
    placeholder: 'Código',
    searchAttribute: 'codigo',
    width: '90px'
  },
  updateSubscription: {
    name: "single_produto"
  },
  onSelected: function (id, options) {
    if (id) {
      Meteor.subscribe("single_produto", id);
    }
  }
};