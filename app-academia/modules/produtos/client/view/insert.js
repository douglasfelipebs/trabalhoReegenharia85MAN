AutoForm.hooks({
  formCadastroProdutos: {
    onSubmit: function (doc) {
      event.preventDefault();
      event.stopPropagation();

      Meteor.call('insere_produto', doc, function (err, result) {
        if (!err && result) {
          swal('Sucesso!', 'Produto inserido com sucesso!', 'success');
          $("#formCadastroProdutos").trigger('reset');
          FlowRouter.go('app', {
            menu_router_link: 'produtos',
          })
        } else {
          swal('Erro!', 'Ocorreu um erro ao inserir este Produto!', 'error');
        }
      });
    }
  }
});