Meteor.methods({
  insere_matricula_horario: function (doc) {
    return !!MatriculaHorarios.insert(doc);
  },
  update_matricula_horario: function (update_doc) {
    return !!MatriculaHorarios.update({_id: update_doc._id}, update_doc.update);
  },
  remove_matriculas_horarios: function (_id) {
    return !!MatriculaHorarios.remove({_id});
  }
});