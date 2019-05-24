Template.edit_button.events({
  'click #edit_button': function (event, instance) {
    const current_app = FlowRouter.getParam('menu_router_link');
    FlowRouter.go('app_action_item', {
      menu_router_link: current_app,
      action: 'edit',
      _id: instance.data._id,
    });
  }
});