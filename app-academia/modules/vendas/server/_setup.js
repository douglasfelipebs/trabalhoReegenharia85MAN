if (!Apps.findOne({_id: "vendas"})) {
  Apps.insert({
    _id: "vendas",
    name: "Vendas",
    title: "Vendas",
    router_link: "vendas",
    active: true
  });
}

if (!Menus.findOne({_id: "vendas"})) {
  Menus.insert({
    _id: "vendas",
    title: "Vendas",
    icon_class: "fa-usd",
    order: 1,
    parent: "menu_vendas",
    app_id: "vendas",
  });
}