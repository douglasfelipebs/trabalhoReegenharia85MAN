Template.alunos_actions.events({
  'click #action_list': function () {
    FlowRouter.go('app', {
      menu_router_link: 'alunos',
    })
  },
  'click #action_add': function () {
    FlowRouter.go('app_action', {
      menu_router_link: 'alunos',
      action: 'add'
    });
  }
});
