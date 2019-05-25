AutoForm.hooks({
  formCadastroAtividades: {
    onSubmit: function (doc) {
      event.preventDefault();
      event.stopPropagation();

      Meteor.call('insere_atividade', doc, function (err, result) {
        if (!err && result) {
          swal('Sucesso!', 'Atividade inserido com sucesso!', 'success');
          $("#formCadastroAtividades").trigger('reset');
          FlowRouter.go('app', {
            menu_router_link: 'atividades',
          })
        } else {
          swal('Erro!', 'Ocorreu um erro ao inserir este Atividade!', 'error');
        }
      });
    }
  }
});