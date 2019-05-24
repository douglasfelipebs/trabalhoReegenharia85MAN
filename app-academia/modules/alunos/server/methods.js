Meteor.methods({
  insere_aluno: function (doc) {
    return !!Alunos.insert(doc);
  },
  update_aluno: function (update_doc) {
    return !!Alunos.update({_id: update_doc._id, update: update_doc.update});
  }
});