if (!Apps.findOne({_id: "equipamentos"})) {
  Apps.insert({
    _id: "equipamentos",
    name: "Equipamentos",
    title: "Equipamentos",
    router_link: "equipamentos",
    active: true
  });
}

if (!Menus.findOne({_id: "equipamentos"})) {
  Menus.insert({
    _id: "equipamentos",
    title: "Equipamentos",
    icon_class: "fa-briefcase",
    order: 1,
    parent: "cadastros",
    app_id: "equipamentos",
  });
}