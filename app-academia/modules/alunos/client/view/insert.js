AutoForm.hooks({
  formCadastroAlunos: {
    onSubmit: function (doc) {
      event.preventDefault();
      event.stopPropagation();

      Meteor.call('insere_aluno', doc, function (err, result) {
        if (!err && result) {
          FlowRouter.go('app', {
            menu_router_link: 'alunos',
          })
        }
      });
    }
  }
});