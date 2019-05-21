Template.alunos_update.onCreated(function () {
  const instance = this;
  const this_id = FlowRouter.getParam('_id');

  instance.subscribe('single_aluno', this_id);
});

Template.alunos_update.helpers({
  doc: function () {
    const this_id = FlowRouter.getParam('_id');
    if (this_id) {
      return Alunos.findOne({_id: this_id});
    }
  }
});

AutoForm.hooks({
  formAlteracaoAluno: {
    onSubmit: function (doc, update_doc, current_doc) {
      event.preventDefault();
      event.stopPropagation();

      const update_method_doc = {
        _id: current_doc._id,
        update: update_doc
      }
      Meteor.call('update_aluno', update_method_doc, function (err, result) {
        if (!err && result) {
          FlowRouter.go('/alunos');
        }
      });
    }
  }
});