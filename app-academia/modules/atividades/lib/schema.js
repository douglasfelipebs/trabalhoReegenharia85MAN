SchemaAtividades = {};

let ssAtividades = {
  codigo: {
    type: Number,
    optional: false,
    label: 'Código',
  },
  nome: {
    type: String,
    optional: false,
    label: 'Nome',
  },
};

SchemaAtividades.ssForm = new SimpleSchema(ssAtividades);

Atividades.attachSchema(SchemaAtividades.ssForm);