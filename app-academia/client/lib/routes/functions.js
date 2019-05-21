import { Tracker } from 'meteor/tracker'

FlowRouter.route("/", {
  name: 'index',
  action: function(params, queryParams) {
    BlazeLayout.render('home');
  }
});

let ActionNeedsId = ["edit", "view"];

FlowRouter.route('/:menu_router_link/', {
  name: "app",
  subscriptions: function (params, queryParams) {
    this.register('menus', Meteor.subscribe('menus'));
    this.register('apps', AppsSub.subscribe('apps'));
  },
  action: function (params, queryParams) {
    Tracker.autorun(function (c) {
      // Wait for apps subscription to get ready.
      if (AppsSub.ready()) {
        let this_app = Apps.findOne({
          router_link: params.menu_router_link
        });
        if (this_app) {
          BlazeLayout.render("layout", {
            content: this_app._id,
            actions: this_app._id + "_actions"
          });
        } else {
          FlowRouter.go("home");
        }
        c.stop(); // we don't need this computation anymore, since it triggered another one (above).
      }
    });
  }
});
//
FlowRouter.route('/:menu_router_link/:action', {
  name: "app_action",
  subscriptions: function (params, queryParams) {
    this.register('menus', Meteor.subscribe('menus'));
    this.register('apps', AppsSub.subscribe('apps'));
  },
  action: function (params) {
    Tracker.autorun(function (c) {
      if (AppsSub.ready()) {
        if (!params._id && ActionNeedsId.includes(params.action)) {
          FlowRouter.go('/' + params.menu_router_link);
          c.stop(); // we don't need this computation anymore, since it triggered another one (above).
        } else {
          let this_app = Apps.findOne({
            router_link: params.menu_router_link
          });
          if (this_app) {
            BlazeLayout.render("layout", {
              content: this_app._id,
              actions: this_app._id + "_actions"
            });
          }
          c.stop(); // we don't need this computation anymore, since it triggered another one (above).
        }
      }
    });
  }
});

FlowRouter.route('/:menu_router_link/:action/:_id', {
  name: "app_action_item",
  subscriptions: function (params, queryParams) {
    this.register('menus', Meteor.subscribe('menus'));
    this.register('apps', AppsSub.subscribe('apps'));
  },
  action: function (params) {
    Tracker.autorun(function (c) {
      if (AppsSub.ready()) {
        if (!params._id && ActionNeedsId.includes(params.action)) {
          FlowRouter.go('/' + params.menu_router_link);
          c.stop(); // we don't need this computation anymore, since it triggered another one (above).
        } else {
          let this_app = Apps.findOne({
            router_link: params.menu_router_link
          });
          if (this_app) {
            BlazeLayout.render("layout", {
              content: this_app._id,
              actions: this_app._id + "_actions"
            });
          }
          c.stop(); // we don't need this computation anymore, since it triggered another one (above).
        }
      }
    });
  }
});
