if (!Menus.findOne({_id: "cadastros"})) {
  Menus.insert({
    _id: "cadastros",
    title: "Cadastros",
    icon_class: "fa-pencil",
    order: 1,
  });
}

if (!Menus.findOne({_id: "opcAlunos"})) {
  Menus.insert({
    _id: "opcAlunos",
    title: "Alunos",
    icon_class: "fa-pencil",
    order: 2,
  });
}