FlowRouter.route("/", {
  name: 'index',
  action: function(params, queryParams) {
    BlazeLayout.render('padrao');
  }
});

FlowRouter.route('/alunos', {
  name: 'alunos',
  action: function(params, queryParams) {
    BlazeLayout.render('alunos');
  }
});

FlowRouter.route('/tela2', {
  name: 'tela2',
  action: function(params, queryParams) {
    BlazeLayout.render('tela2');
  }
});
