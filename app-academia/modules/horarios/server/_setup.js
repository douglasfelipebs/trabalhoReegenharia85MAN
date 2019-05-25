if (!Apps.findOne({_id: "horarios"})) {
  Apps.insert({
    _id: "horarios",
    name: "Horarios",
    title: "Horarios",
    router_link: "horarios",
    active: true
  });
}

if (!Menus.findOne({_id: "horarios"})) {
  Menus.insert({
    _id: "horarios",
    title: "Horarios",
    icon_class: "fa-briefcase",
    order: 1,
    parent: "cadastros",
    app_id: "horarios",
  });
}