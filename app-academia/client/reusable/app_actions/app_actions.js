Template.app_actions.events({
  'click #action_list': function () {
    const current_app = FlowRouter.getParam('menu_router_link');
    FlowRouter.go('app', {
      menu_router_link: current_app,
    })
  },
  'click #action_add': function () {
    const current_app = FlowRouter.getParam('menu_router_link');
    FlowRouter.go('app_action', {
      menu_router_link: current_app,
      action: 'add'
    });
  }
});
