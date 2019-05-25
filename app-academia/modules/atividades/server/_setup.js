if (!Apps.findOne({_id: "atividades"})) {
  Apps.insert({
    _id: "atividades",
    name: "Atividades",
    title: "Atividades",
    router_link: "atividades",
    active: true
  });
}

if (!Menus.findOne({_id: "atividades"})) {
  Menus.insert({
    _id: "atividades",
    title: "Atividades",
    icon_class: "fa-briefcase",
    order: 1,
    parent: "cadastros",
    app_id: "atividades",
  });
}