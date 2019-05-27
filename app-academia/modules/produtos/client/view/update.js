Template.produtos_update.onCreated(function () {
  const instance = this;
  const this_id = FlowRouter.getParam('_id');

  if (this_id) {
    instance.subscribe('single_produto', this_id);
    instance.subsReady = new ReactiveVar(false);
    instance.doc = new ReactiveVar(undefined);

    instance.autorun(function () {
      instance.subsReady.set(instance.subscriptionsReady());
      instance.doc.set(Produtos.findOne({_id: this_id}));
    })
  }
});

Template.produtos_update.helpers({
  doc: function () {
    return Template.instance().doc.get();
  },
  docReactive: function () {
    return Template.instance().doc;
  },
  subsReady: function () {
    return Template.instance().subsReady;
  }
});

AutoForm.hooks({
  formAlteracaoProduto: {
    onSubmit: function (doc, update_doc, current_doc) {
      event.preventDefault();
      event.stopPropagation();

      const update_method_doc = {
        _id: current_doc._id,
        update: update_doc
      };
      Meteor.call('update_produto', update_method_doc, function (err, result) {
        if (!err && result) {
          swal('Sucesso!', 'Produto atualizado com sucesso!', 'success');
          FlowRouter.go('app', {
            menu_router_link: 'produtos',
          })
        } else {
          swal('Erro!', 'Ocorreu um erro ao alterar este Produto!', 'error');
          $('[type="submit"]').removeAttr('disabled');
        }
      });
    }
  }
});