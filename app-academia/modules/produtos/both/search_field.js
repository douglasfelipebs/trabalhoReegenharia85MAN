SearchFieldDefaultOptions.ProdutoBar = {
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
    customSelector: {
      tipo: 'bar',
    }
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

SearchFieldDefaultOptions.ProdutoLoja = {
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
    customSelector: {
      tipo: 'loja',
    }
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