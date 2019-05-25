Meteor.methods({
  insere_atividade: function (doc) {
    return !!Atividades.insert(doc);
  },
  update_atividade: function (update_doc) {
    return !!Atividades.update({_id: update_doc._id}, update_doc.update);
  },
  remove_atividades: function (_id) {
    return !!Atividades.remove({_id});
  }
});