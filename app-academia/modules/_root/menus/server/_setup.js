if (!Menus.findOne({_id: "cadastros"})) {
  Menus.insert({
    _id: "cadastros",
    title: "Cadastros",
    icon_class: "fa-pencil",
    order: 1,
  });
}

if (!Menus.findOne({_id: "menu_alunos"})) {
  Menus.insert({
    _id: "menu_alunos",
    title: "Alunos",
    icon_class: "fa-pencil",
    order: 2,
  });
}

if (!Menus.findOne({_id: "menu_vendas"})) {
  Menus.insert({
    _id: "menu_vendas",
    title: "Vendas",
    icon_class: "fa-usd",
    order: 3,
  });
}