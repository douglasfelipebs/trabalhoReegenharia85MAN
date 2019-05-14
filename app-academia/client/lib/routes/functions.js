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

let ActionNeedsId = ["edit", "view"];

FlowRouter.route('/login', {
  name: "login",
  action(params) {
    if (!(Meteor.userId() || Meteor.loggingIn())) {
      $(".modal").modal('hide');
      BlazeLayout.render("user_login");
    } else {
      FlowRouter.go('/');
    }
  }
});

loggedInRoute = FlowRouter.group({
  triggersEnter: [function () {
    // Without an user or ongoing login, go to login page.
    if (!(Meteor.userId() || Meteor.loggingIn())) {
      let router = FlowRouter.current();
      if (router.route.name !== "login") {
        Session.set('redirectAfterLogin', router.path);
      }
      FlowRouter.go('login');
    }
  }]
});

loggedInRoute.route('/', {
  name: "home",
  action: function (params) {
    Meteor.autorun(function (c) {
      // Without an user or ongoing login, go to login page.
      if (!(Meteor.userId() || Meteor.loggingIn())) {
        FlowRouter.go('login');
        c.stop(); // we don't need this computation anymore, since route changed (above).
      } else {
        BlazeLayout.render('home');
      }
    });
  }
});

loggedInRoute.route('/:menu_router_link/', {
  name: "app",
  subscriptions: function (params, queryParams) {
    // using Fast Render
    if (Meteor.userId()) {
      this.register('menus', Meteor.subscribe('menus', params.organization));
      this.register('apps', AppsSub.subscribe('apps', params.organization));
    }
  },
  action: function (params, queryParams) {
    Meteor.autorun(function (c) {
      // Without an user or ongoing login, go to login page.
      if (!(Meteor.userId() || Meteor.loggingIn())) {
        FlowRouter.go("login");
        c.stop(); // we don't need this computation anymore, since route changed (above).
      } else {
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
      }
    });
  }
});
//
// loggedInRoute.route('/:organization/:menu_router_link/:action', {
//   name: "app_action",
//   subscriptions: function (params, queryParams) {
//     // using Fast Render
//     if (Meteor.userId()) {
//       this.register('organizations', Meteor.subscribe('organizations'));
//       this.register('menus', Meteor.subscribe('menus', params.organization));
//       this.register('apps', AppsSub.subscribe('apps', params.organization));
//     }
//   },
//   action: function (params) {
//     Meteor.autorun(function (c) {
//       // Without an user or ongoing login, go to login page.
//       if (!(Meteor.userId() || Meteor.loggingIn())) {
//         FlowRouter.go("login");
//         c.stop(); // we don't need this computation anymore, since route changed (above).
//       } else {
//         if (AppsSub.ready()) {
//           if (!params._id && ActionNeedsId.includes(params.action)) {
//             FlowRouter.go('/' + params.organization + '/' + params.menu_router_link);
//             c.stop(); // we don't need this computation anymore, since it triggered another one (above).
//
//           } else {
//             let organization_url_name = UsersController.getDefaultOrganizationUrlName(params.organization);
//
//             if (organization_url_name === params.organization) {
//               let this_app = Apps.findOne({
//                 router_link: params.menu_router_link
//               });
//               if (this_app) {
//                 BlazeLayout.render("layout", {
//                   content: this_app._id,
//                   actions: this_app._id + "_actions"
//                 });
//               } else {
//                 BlazeLayout.render("layout", {
//                   content: "404"
//                 });
//               }
//             } else {
//               FlowRouter.go('/' + organization_url_name + '/' + params.menu_router_link + '/' + params.action);
//             }
//
//             c.stop(); // we don't need this computation anymore, since it triggered another one (above).
//           }
//         } else {
//           BlazeLayout.render("layout", {
//             content: "loading"
//           });
//         }
//       }
//     });
//   }
// });
//
// loggedInRoute.route('/:organization/:menu_router_link/:action/:_id', {
//   name: "app_action_item",
//   subscriptions: function (params, queryParams) {
//     // using Fast Render
//     if (Meteor.userId()) {
//       this.register('organizations', Meteor.subscribe('organizations'));
//       this.register('menus', Meteor.subscribe('menus', params.organization));
//       this.register('apps', AppsSub.subscribe('apps', params.organization));
//     }
//   },
//   action: function (params) {
//     Meteor.autorun(function (c) {
//       // Without an user or ongoing login, go to login page.
//       if (!(Meteor.userId() || Meteor.loggingIn())) {
//         FlowRouter.go("login");
//         c.stop(); // we don't need this computation anymore, since route changed (above).
//       } else {
//         if (AppsSub.ready()) {
//           if (!params._id && ActionNeedsId.includes(params.action)) {
//             FlowRouter.go('/' + params.organization + '/' + params.menu_router_link);
//             c.stop(); // we don't need this computation anymore, since it triggered another one (above).
//
//           } else {
//             let organization_url_name = UsersController.getDefaultOrganizationUrlName(params.organization);
//
//             if (organization_url_name === params.organization) {
//               let this_app = Apps.findOne({
//                 router_link: params.menu_router_link
//               });
//               if (this_app) {
//                 BlazeLayout.render("layout", {
//                   content: this_app._id,
//                   actions: this_app._id + "_actions"
//                 });
//               } else {
//                 BlazeLayout.render("layout", {
//                   content: "404"
//                 });
//               }
//             } else {
//               FlowRouter.go('/' + organization_url_name + '/' + params.menu_router_link + '/' + params.action + '/' + params._id);
//             }
//
//             c.stop(); // we don't need this computation anymore, since it triggered another one (above).
//           }
//         } else {
//           BlazeLayout.render("layout", {
//             content: "loading"
//           });
//         }
//       }
//     });
//   }
// });
