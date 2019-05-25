AutoForm.hooks({
  formCadastroProfissionais: {
    onSubmit: function (doc) {
      event.preventDefault();
      event.stopPropagation();

      Meteor.call('insere_profissional', doc, function (err, result) {
        if (!err && result) {
          FlowRouter.go('app', {
            menu_router_link: 'profissionais',
          })
        }
      });
    }
  }
});