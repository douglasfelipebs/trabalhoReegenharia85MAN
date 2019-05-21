AutoForm.hooks({
  formCadastroAlunos: {
    onSubmit: function (doc) {
      Meteor.call('insere_aluno', doc, function (err, result) {
        if (!err && result) {
          FlowRouter.go('/alunos');
        }
      });
    }
  }
});