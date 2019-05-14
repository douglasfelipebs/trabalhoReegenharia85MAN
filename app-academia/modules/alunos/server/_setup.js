if (!Apps.findOne({_id: "alunos"})) {
  Apps.insert({
    _id: "alunos",
    name: "Alunos",
    title: "Alunos",
    router_link: "alunos",
    active: true
  });
}

if (!Menus.findOne({_id: "alunos"})) {
  Menus.insert({
    _id: "alunos",
    title: "Alunos",
    icon_class: "fa-user",
    order: 1,
    parent: "cadastros",
    app_id: "alunos",
  });
}