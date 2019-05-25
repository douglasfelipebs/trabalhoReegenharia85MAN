Meteor.methods({
  insere_horario: function (doc) {
    return !!Horarios.insert(doc);
  },
  update_horario: function (update_doc) {
    return !!Horarios.update({_id: update_doc._id}, update_doc.update);
  },
  remove_horarios: function (_id) {
    return !!Horarios.remove({_id});
  }
});