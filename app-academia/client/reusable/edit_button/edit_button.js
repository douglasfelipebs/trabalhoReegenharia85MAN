Template.edit_button.events({
  'click #edit_button': function (event, instance) {
    const current_path = FlowRouter.current().path;
    const new_path = current_path + "/edit/" + instance.data._id;
    FlowRouter.go(new_path);
  }
});