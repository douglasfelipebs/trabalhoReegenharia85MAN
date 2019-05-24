SchemaAlunos = {};

let ssAlunos = {
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
  dtNasc: {
    type: Date,
    optional: false,
    label: 'Data de Nascimento',
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
  'contato.telefone': {
    type: String,
    optional: true,
    label: 'Telefone',
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
  endereco: {
    type: Object,
    optional: false,
  },
  'endereco.cidade': {
    type: String,
    optional: false,
    label: 'Cidade',
  },
  'endereco.uf': {
    type: String,
    optional: false,
    label: 'UF',
    allowedValues: ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB',
      'PE', 'PI', 'PR', 'RJ', 'RO', 'RN', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
    autoform: {
      firstOption: '',
      options: function () {
        return {
          'AC': 'AC',
          'AL': 'AL',
          'AP': 'AP',
          'AM': 'AM',
          'BA': 'BA',
          'CE': 'CE',
          'DF': 'DF',
          'ES': 'ES',
          'GO': 'GO',
          'MA': 'MA',
          'MG': 'MG',
          'MS': 'MS',
          'MT': 'MT',
          'PA': 'PA',
          'PB': 'PB',
          'PE': 'PE',
          'PI': 'PI',
          'PR': 'PR',
          'RJ': 'RJ',
          'RO': 'RO',
          'RN': 'RN',
          'RR': 'RR',
          'RS': 'RS',
          'SC': 'SC',
          'SE': 'SE',
          'SP': 'SP',
          'TO': 'TO',
        };
      }
    },
  },
  'endereco.cep': {
    type: String,
    optional: false,
    label: 'CEP',
  },
  'endereco.rua': {
    type: String,
    optional: false,
    label: 'Rua',
  },
  'endereco.numero': {
    type: String,
    optional: false,
    label: 'Número',
    autoform: {
      type: 'number'
    }
  },
  'endereco.bairro': {
    type: String,
    optional: false,
    label: 'Bairro',
  },
  questionario: {
    type: Object,
    optional: true,
  },
  'questionario.possuiPlanoSaude': {
    type: String,
    optional: true,
    label: 'Possui plano de saúde',
    allowedValues: ['S', 'N'],
    autoform: {
      firstOption: '',
      options: function () {
        return {
          'S': 'Sim',
          'N': 'Não',
        };
      },
    },
  },
  'questionario.planoSaude': {
    type: String,
    optional: true,
    label: 'Plano de Saúde',
  },
  'questionario.praticaEsporte': {
    type: String,
    optional: true,
    label: 'Pratica outro esporte',
    allowedValues: ['S', 'N'],
    autoform: {
      firstOption: '',
      options: function () {
        return {
          'S': 'Sim',
          'N': 'Não',
        };
      },
    },
  },
  'questionario.esportePraticado': {
    type: String,
    optional: true,
    label: 'Esporte Praticado',
  },
  'questionario.porqueFazAcademia': {
    type: [String],
    optional: true,
    label: 'Porque faz academia',
  },
  'questionario.porqueOutro': {
    type: String,
    optional: true,
    label: "Qual?",
  },
  'questionario.indicacao': {
    type: Object,
    optional: true,
  },
  'questionario.indicacao.comoSoube': {
    type: [String],
    optional: true,
    label: "Como soube da academia",
  },
  'questionario.indicacao.alunoIndicante': {
    type: String,
    optional: true,
  },
};

SchemaAlunos.ssForm = new SimpleSchema(ssAlunos);

Alunos.attachSchema(SchemaAlunos.ssForm);