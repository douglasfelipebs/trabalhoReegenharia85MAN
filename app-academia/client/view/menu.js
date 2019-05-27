Template.menu.helpers({
  hasChildren: function () {
    return !!Menus.findOne({parent: this._id});
  },
  children: function () {
    return Menus.find({parent: this._id}, {sort: {order: 1}});
  },
  router_link: function () {
    let app = Apps.findOne({_id: this.app_id});
    return app && app.router_link ? app.router_link : "";
  },
  icon: function () {
    const menu = Menus.findOne({_id: this._id});
    return menu && menu.icon_class ? menu.icon_class : "";
  }
});

Template.menu.events({
  "click a": function (event) {
    let app = Apps.findOne({_id: Template.instance().data._id});
    if (app && app.router_link) {
      FlowRouter.go('/' + app.router_link);
    }
  },
  "click a[href='#parent_menu']": function (event) {
  }
});

function redirectToUniqueAllowedNestedApp(id, target) {
  let nested_menus = Menus.find({parent: id}).fetch();

  if (nested_menus.length === 1) {
    // if the unique menu child doesn't have an app_id attached to it,
    // restart the proccess searching for nested menus inside it.
    if (!nested_menus[0].app_id) {
      redirectToUniqueAllowedNestedApp(nested_menus[0]._id, target);
    } else {
      let nested_menus_ul = $(target).next();
      let menu_is_open = !(nested_menus_ul[0].style.display === "none");

      if (!menu_is_open) {
        // in case of existing an app_id, redirects the user to the app.
        let app = Apps.findOne({_id: nested_menus[0].app_id});
        if (app && app.router_link) {
          FlowRouter.go('/' + app.router_link);
        }
      }
    }
  }
}