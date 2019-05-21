Template.alunos.helpers({
  add: function () {
    return FlowRouter.getParam('action') === 'add';
  },
  edit: function () {
    return FlowRouter.getParam('action') === 'edit';
  },
  list: function () {
    const action = FlowRouter.getParam('action');
    return (action === undefined || action === 'list');
  }
});