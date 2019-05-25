SearchFieldDefaultOptions.Atividade = {
  field: {
    label: "Atividade",
    placeholder: "Selecione um Atividade",
    name: "atividade_id",
    isAfField: true,
    valueStoringAttr: "data-id",
    valueAttrFormat: "[nome]",
    allowCleanBtn: true,
  },
  table: {
    tableId: "stateSaveIdAtividadeModal",
    tableName: "Atividades",
  },
  collection: {
    name: "atividades"
  },
  freeSearch: {
    placeholder: 'Código',
    searchAttribute: 'codigo',
    width: '90px'
  },
  updateSubscription: {
    name: "single_atividade"
  },
  onSelected: function (id, options) {
    if (id) {
      Meteor.subscribe("single_atividade", id);
    }
  }
};