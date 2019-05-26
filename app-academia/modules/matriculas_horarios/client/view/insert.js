AutoForm.hooks({
  formCadastroMatriculaHorarios: {
    onSubmit: function (doc) {
      event.preventDefault();
      event.stopPropagation();

      Meteor.call('insere_matricula_horario', doc, function (err, result) {
        if (!err && result) {
          swal('Sucesso!', 'MatriculaHorario inserido com sucesso!', 'success');
          $("#formCadastroMatriculaHorarios").trigger('reset');
          FlowRouter.go('app', {
            menu_router_link: 'matriculas_horarios',
          })
        } else {
          swal('Erro!', 'Ocorreu um erro ao inserir este MatriculaHorario!', 'error');
        }
      });
    }
  }
});