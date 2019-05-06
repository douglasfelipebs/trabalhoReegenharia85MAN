FlowRouter.route('/', {
  action: function(params, queryParams) {
    BlazeLayout.render('main', { content: "padrao" });
  }
});

FlowRouter.route('/tela1', {
  action: function(params, queryParams) {
    BlazeLayout.render('main', { content: "tela1" });
  }
});

FlowRouter.route('/tela2', {
  action: function(params, queryParams) {
    BlazeLayout.render('main', { content: "tela2" });
  }
});
