SearchFieldDefaultOptions.Aluno = {
  field: {
    label: "Aluno",
    placeholder: "Selecione um Aluno",
    name: "aluno_id",
    isAfField: true,
    valueStoringAttr: "data-id",
    valueAttrFormat: "[nome]",
    allowCleanBtn: true,
  },
  table: {
    tableId: "stateSaveIdAlunoModal",
    tableName: "Alunos",
  },
  collection: {
    name: "alunos"
  },
  freeSearch: {
    placeholder: 'Código',
    searchAttribute: 'codigo',
    width: '90px'
  },
  updateSubscription: {
    name: "single_aluno"
  },
  onSelected: function (id, options) {
    if (id) {
      Meteor.subscribe("single_aluno", id);
    }
  }
};
