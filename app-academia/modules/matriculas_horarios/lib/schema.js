SchemaMatriculaHorarios = {};

let ssMatriculaHorarios = {
  codigo: {
    type: Number,
    optional: false,
    label: 'Código',
  },
  atividade_id: {
    type: String,
    optional: false,
    label: "Atividade",
  },
  atividade_nome: {
    type: String,
    optional: true,
    label: "Atividade",
  },
  local_atividade_nome: {
    type: String,
    optional: true,
    label: "Local da Atividade"
  },
  aluno_id: {
    type: String,
    optional: false,
    label: "Aluno",
  },
  aluno_nome: {
    type: String,
    optional: true,
    label: "Aluno",
  },
  equipamento_id: {
    type: String,
    optional: false,
    label: "Equipamento",
  },
  equipamento_nome: {
    type: String,
    optional: true,
    label: "Equipamento",
  },
  horario_id: {
    type: String,
    optional: false,
    label: "Horário",
  },
  profissional_id: {
    type: String,
    optional: false,
    label: "Profissional",
  },
  profissional_nome: {
    type: String,
    optional: true,
    label: "Profissional",
  }
};

SchemaMatriculaHorarios.ssForm = new SimpleSchema(ssMatriculaHorarios);

MatriculaHorarios.attachSchema(SchemaMatriculaHorarios.ssForm);