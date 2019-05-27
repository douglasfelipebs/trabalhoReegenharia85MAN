if (!Apps.findOne({_id: "produtos"})) {
  Apps.insert({
    _id: "produtos",
    name: "Produtos",
    title: "Produtos",
    router_link: "produtos",
    active: true
  });
}

if (!Menus.findOne({_id: "produtos"})) {
  Menus.insert({
    _id: "produtos",
    title: "Produtos",
    icon_class: "fa-shopping-cart",
    order: 1,
    parent: "cadastros",
    app_id: "produtos",
  });
}