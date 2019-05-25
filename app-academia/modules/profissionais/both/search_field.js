SearchFieldDefaultOptions.Profissional = {
  field: {
    label: "Profissional",
    placeholder: "Selecione um Profissional",
    name: "profissional_id",
    isAfField: true,
    valueStoringAttr: "data-id",
    valueAttrFormat: "[nome]",
    allowCleanBtn: true,
  },
  table: {
    tableId: "stateSaveIdProfissionalModal",
    tableName: "Profissionais",
  },
  collection: {
    name: "profissionais"
  },
  freeSearch: {
    placeholder: 'Código',
    searchAttribute: 'codigo',
    width: '90px'
  },
  updateSubscription: {
    name: "single_profissional"
  },
  onSelected: function (id, options) {
    if (id) {
      Meteor.subscribe("single_profissional", id);
    }
  }
};