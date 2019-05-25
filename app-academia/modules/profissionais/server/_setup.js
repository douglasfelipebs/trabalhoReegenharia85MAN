if (!Apps.findOne({_id: "profissionais"})) {
  Apps.insert({
    _id: "profissionais",
    name: "Profissionais",
    title: "Profissionais",
    router_link: "profissionais",
    active: true
  });
}

if (!Menus.findOne({_id: "profissionais"})) {
  Menus.insert({
    _id: "profissionais",
    title: "Profissionais",
    icon_class: "fa-briefcase",
    order: 1,
    parent: "cadastros",
    app_id: "profissionais",
  });
}