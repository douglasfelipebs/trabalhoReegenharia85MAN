FlowRouter.route("/", {
  name: 'index',
  action: function(params, queryParams) {
    BlazeLayout.render('padrao');
  }
});

FlowRouter.route('/tela1', {
  name: 'tela1',
  action: function(params, queryParams) {
    BlazeLayout.render('tela1');
  }
});

FlowRouter.route('/tela2', {
  name: 'tela2',
  action: function(params, queryParams) {
    BlazeLayout.render('tela2');
  }
});
