FlowRouter.route("/", {
  name: 'index',
  action: function(params, queryParams) {
    BlazeLayout.render('home');
  }
});

FlowRouter.route('/alunos', {
  name: 'alunos',
  action: function(params, queryParams) {
    BlazeLayout.render('alunos');
  }
});

FlowRouter.route('/home', {
  name: 'home',
  action: function(params, queryParams) {
    BlazeLayout.render('home');
  }
});
