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
  localAtividade: {
    type: String,
    label: 'Local da Atividade',
  }
};

SchemaAtividades.ssForm = new SimpleSchema(ssAtividades);

Atividades.attachSchema(SchemaAtividades.ssForm);