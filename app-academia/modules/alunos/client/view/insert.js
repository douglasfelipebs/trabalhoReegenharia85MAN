AutoForm.hooks({
  formCadastroAlunos: {
    onSubmit: function (doc) {
      event.preventDefault();
      event.stopPropagation();

      Meteor.call('insere_aluno', doc, function (err, result) {
        if (!err && result) {
          swal('Sucesso!', 'Aluno inserido com sucesso!', 'success');
          FlowRouter.go('app', {
            menu_router_link: 'alunos',
          })
        } else {
          swal('Erro!', 'Ocorreu um erro ao inserir este Aluno!', 'error');
        }
      });
    }
  }
});