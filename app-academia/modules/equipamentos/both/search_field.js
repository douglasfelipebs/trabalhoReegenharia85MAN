SearchFieldDefaultOptions.Equipamento = {
  field: {
    label: "Equipamento",
    placeholder: "Selecione um Equipamento",
    name: "equipamento_id",
    isAfField: true,
    valueStoringAttr: "data-id",
    valueAttrFormat: "[nome]",
    allowCleanBtn: true,
  },
  table: {
    tableId: "stateSaveIdEquipamentoModal",
    tableName: "Equipamentos",
  },
  collection: {
    name: "equipamentos"
  },
  freeSearch: {
    placeholder: 'Código',
    searchAttribute: 'codigo',
    width: '90px'
  },
  updateSubscription: {
    name: "single_equipamento"
  },
  onSelected: function (id, options) {
    if (id) {
      Meteor.subscribe("single_equipamento", id);
    }
  }
};