AutoForm.hooks({
  formCadastroAlunos: {
    onSubmit: function (doc) {
      Meteor.call('insere_aluno', doc);
    }
  }
});