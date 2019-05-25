AutoForm.hooks({
  formCadastroHorarios: {
    onSubmit: function (doc) {
      event.preventDefault();
      event.stopPropagation();

      Meteor.call('insere_horario', doc, function (err, result) {
        if (!err && result) {
          swal('Sucesso!', 'Horario inserido com sucesso!', 'success');
          $("#formCadastroHorarios").trigger('reset');
          FlowRouter.go('app', {
            menu_router_link: 'horarios',
          })
        } else {
          swal('Erro!', 'Ocorreu um erro ao inserir este Horario!', 'error');
        }
      });
    }
  }
});