AutoForm.hooks({
  formCadastroProfissionais: {
    onSubmit: function (doc) {
      event.preventDefault();
      event.stopPropagation();

      Meteor.call('insere_profissional', doc, function (err, result) {
        if (!err && result) {
          swal('Sucesso!', 'Profissional inserido com sucesso!', 'success');
          FlowRouter.go('app', {
            menu_router_link: 'profissionais',
          })
        } else {
          swal('Erro!', 'Ocorreu um erro ao inserir este Profissional!', 'error');
        }
      });
    }
  }
});