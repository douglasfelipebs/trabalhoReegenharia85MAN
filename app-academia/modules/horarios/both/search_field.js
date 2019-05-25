SearchFieldDefaultOptions.Horario = {
  field: {
    label: "Horario",
    placeholder: "Selecione um Horario",
    name: "horario_id",
    isAfField: true,
    valueStoringAttr: "data-id",
    valueAttrFormat: "[nome]",
    allowCleanBtn: true,
  },
  table: {
    tableId: "stateSaveIdHorarioModal",
    tableName: "Horarios",
  },
  collection: {
    name: "horarios"
  },
  freeSearch: {
    placeholder: 'Código',
    searchAttribute: 'codigo',
    width: '90px'
  },
  updateSubscription: {
    name: "single_horario"
  },
  onSelected: function (id, options) {
    if (id) {
      Meteor.subscribe("single_horario", id);
    }
  }
};