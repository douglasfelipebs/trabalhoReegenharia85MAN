SearchFieldDefaultOptions.MatriculaHorario = {
  field: {
    label: "MatriculaHorario",
    placeholder: "Selecione um MatriculaHorario",
    name: "matricula_horario_id",
    isAfField: true,
    valueStoringAttr: "data-id",
    valueAttrFormat: "[nome]",
    allowCleanBtn: true,
  },
  table: {
    tableId: "stateSaveIdMatriculaHorarioModal",
    tableName: "MatriculaHorarios",
  },
  collection: {
    name: "matriculas_horarios"
  },
  freeSearch: {
    placeholder: 'Código',
    searchAttribute: 'codigo',
    width: '90px'
  },
  updateSubscription: {
    name: "single_matricula_horario"
  },
  onSelected: function (id, options) {
    if (id) {
      Meteor.subscribe("single_matricula_horario", id);
    }
  }
};