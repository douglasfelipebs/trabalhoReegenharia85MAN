Template.menus.onCreated(function () {
  const instance = this;

  instance.subscribe('menus');
  instance.subscribe('apps');
});

Template.menus.helpers({
  menus: function () {
    return Menus.find({parent: {"$exists": false}}, {sort: {order: 1}});
  }
});

Template.menus.events({
  "click a[href='#']": function (event) {
    FlowRouter.go('/');
  }
});