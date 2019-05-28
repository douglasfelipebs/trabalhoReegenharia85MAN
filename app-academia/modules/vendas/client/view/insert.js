AutoForm.hooks({
  formCadastroVendas: {
    onSubmit: function (doc) {
      event.preventDefault();
      event.stopPropagation();

      Meteor.call('insere_venda', doc, function (err, result) {
        if (!err && result) {
          swal('Sucesso!', 'Venda inserido com sucesso!', 'success');
          $("#formCadastroVendas").trigger('reset');
          FlowRouter.go('app', {
            menu_router_link: 'vendas',
          })
        } else {
          swal('Erro!', 'Ocorreu um erro ao inserir este Venda!', 'error');
        }
      });
    }
  }
});