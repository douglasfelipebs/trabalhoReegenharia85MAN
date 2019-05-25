SchemaHorarios = {};

let ssHorarios = {
  codigo: {
    type: Number,
    optional: false,
    label: 'Código',
  },
  diaSemana: {
    type: [String],
    optional: false,
    label: 'Dias da Semana',
  },
  horaInicio: {
    type: String,
    label: 'Horário de Início',
    optional: false,
    autoform: {
      type: 'time'
    }
  },
  horaFim: {
    type: String,
    label: 'Horário de Fim',
    optional: false,
    autoform: {
      type: 'time'
    }
  }
};

SchemaHorarios.ssForm = new SimpleSchema(ssHorarios);

Horarios.attachSchema(SchemaHorarios.ssForm);