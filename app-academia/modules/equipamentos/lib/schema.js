SchemaEquipamentos = {};

let ssEquipamentos = {
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
  localEquipamento: {
    type: String,
    label: 'Local da Equipamento',
    optional: false
  },
  funcao: {
    type: String,
    label: 'Função',
    optional: false
  }
};

SchemaEquipamentos.ssForm = new SimpleSchema(ssEquipamentos);

Equipamentos.attachSchema(SchemaEquipamentos.ssForm);