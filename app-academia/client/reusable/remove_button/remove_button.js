Template.remove_button.events({
  'click #remove_button': function (event, instance) {
    const _id = instance.data._id
    const current_app = FlowRouter.getParam('menu_router_link')
    Meteor.call(`remove_${current_app}`, _id, function (err, result) {
      swal('Sucesso!', 'Arquivo removido com sucesso!', 'success');
    })
  },
})
