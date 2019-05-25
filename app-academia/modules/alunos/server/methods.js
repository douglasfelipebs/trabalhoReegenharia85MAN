Meteor.methods({
  insere_aluno: function (doc) {
    return !!Alunos.insert(doc);
  },
  update_aluno: function (update_doc) {
    console.log(update_doc);
    return !!Alunos.update({_id: update_doc._id}, update_doc.update);
  },
  remove_alunos: function (_id) {
    return !!Alunos.remove({_id});
  }
});