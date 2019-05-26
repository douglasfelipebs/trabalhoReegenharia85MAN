Meteor.publish("single_matricula_horario", function (_id) {
  const matricula_horario = MatriculaHorarios.find({_id});
  return matricula_horario;
});

Meteor.publishComposite('tabular_matriculas_horarios', function (tableName, ids, fields) {
  return {
    find: function () {
      return MatriculaHorarios.find({});
    },
    children: [{
      find: function (doc) {
        return Horarios.find({_id: doc.horario_id}, {
          limit: 1,
        });
      }
    }]
  };
});