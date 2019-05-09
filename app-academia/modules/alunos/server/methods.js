Meteor.methods({
  insere_aluno: function (doc) {
    Alunos.insert(doc);
  }
})