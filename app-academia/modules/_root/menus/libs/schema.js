SchemaMenus = {};

SchemaMenus.Menus = new SimpleSchema({
  title: {
    type: String,
    label: "Título",
    max: 40
  },
  icon_class: {
    type: String,
    label: "Ícone"
  },
  order: {
    type: Number,
    label: "Ordem"
  },
  parent: {
    type: String,
    label: "Pai",
    optional: true,
  },
  app_id: {
    type: String,
    label: "Aplicativo",
    optional: true,
  },
});

Menus.attachSchema(SchemaMenus.Menus);
