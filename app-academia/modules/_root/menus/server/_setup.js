if (!Menus.findOne({_id: "cadastros"})) {
  Menus.insert({
    _id: "cadastros",
    title: "Cadastros",
    icon_class: "fa-pencil",
    order: 1,
  });
}