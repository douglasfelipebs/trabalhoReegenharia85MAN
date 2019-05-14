SchemaApps = {};

let server_schema = {
  name: {
    type: String,
    label: "Nome",
    max: 140
  },
  title: {
    type: String,
    label: "Título",
    max: 140
  },
  router_link: {
    type: String,
    label: "Link"
  },
  root: {
    type: Boolean,
    optional: true,
    label: "Root"
  },
  admin: {
    type: Boolean,
    optional: true,
    label: "Admin"
  },
  active: {
    type: Boolean,
    optional: false
  }
};

SchemaApps.database = new SimpleSchema(server_schema);

Apps.attachSchema(SchemaApps.database);