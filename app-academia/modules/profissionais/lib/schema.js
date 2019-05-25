SchemaProfissionais = {};

let ssProfissionais = {
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
  sexo: {
    type: String,
    optional: false,
    label: 'Sexo',
    allowedValues: ['M', 'F'],
    autoform: {
      firstOption: false,
      options: function () {
        return {
          'M': 'Masculino',
          'F': 'Feminino',
        };
      },
    },
  },
  ativo: {
    type: String,
    label: 'Ativo',
    optional: false,
    autoform: {
      firstOption: false,
      options: function () {
        return {
          'S': 'Ativo',
          'N': 'Inativo',
        };
      },
    },
  },
  contato: {
    type: Object,
    optional: false,
  },
  'contato.celular': {
    type: String,
    optional: true,
    label: 'Celular',
  },
  'contato.email': {
    type: String,
    optional: false,
    label: 'E-mail',
  },
  areaAtuacao: {
    type: String,
    optional: false,
    label: 'Área de Atuação',
    autoform: {
      firstOption: '',
      options: function () {
        return {
          'personal': 'Personal Trainer',
          'coach': 'Coach',
          'natacao': 'Professor de Natação',
          'edFisica': 'Professor de Educação Física',
          'outro': 'Outros',
        };
      },
    },
  }
};

SchemaProfissionais.ssForm = new SimpleSchema(ssProfissionais);

Profissionais.attachSchema(SchemaProfissionais.ssForm);