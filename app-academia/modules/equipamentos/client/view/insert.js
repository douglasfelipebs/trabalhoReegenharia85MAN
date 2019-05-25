AutoForm.hooks({
  formCadastroEquipamentos: {
    onSubmit: function (doc) {
      event.preventDefault();
      event.stopPropagation();

      Meteor.call('insere_equipamento', doc, function (err, result) {
        if (!err && result) {
          swal('Sucesso!', 'Equipamento inserido com sucesso!', 'success');
          $("#formCadastroEquipamentos").trigger('reset');
          FlowRouter.go('app', {
            menu_router_link: 'equipamentos',
          })
        } else {
          swal('Erro!', 'Ocorreu um erro ao inserir este Equipamento!', 'error');
        }
      });
    }
  }
});