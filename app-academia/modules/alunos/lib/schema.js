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
    optional: false,
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
    optional: false,
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
    optional: false,
    label: 'Porque faz academia',
    autoform: {
      type: 'select',
      firstOption: '',
      multiple: true,
      options: function () {
        return {
          '1': 'Aprender a nadar',
          '2': 'Bronquite',
          '3': 'Coluna',
          '4': 'Obesidade',
          '5': 'Treinar',
          '6': 'Manter a forma',
          '7': 'Gestante',
          '8': 'Conselho Médico',
          '9': 'Outros',
        };
      },
    },
  },
  'questionario.porqueOutro': {
    type: String,
    optional: true,
    label: "Qual?",
  },
  'questionario.indicacao': {
    type: Object,
    optional: false,
  },
  'questionario.indicacao.comoSoube': {
    type: [String],
    optional: false,
    label: "Como soube da academia",
    autoform: {
      type: 'select',
      firstOption: '',
      multiple: true,
      options: function () {
        return {
          '1': 'Jornal',
          '2': 'Placa',
          '3': 'Cartaz',
          '4': 'Panfleto',
          '5': 'Amigos',
          '6': 'Outdoor',
          '7': 'Internet',
          '8': 'Passando em Frente',
          '9': 'Outros',
          '10': 'Aluno da Academia',
        };
      },
    },
  },
  'questionario.indicacao.alunoIndicante': {
    type: String,
    optional: true,
  },
};

SchemaAlunos.ssForm = new SimpleSchema(ssAlunos);

Alunos.attachSchema(SchemaAlunos.ssForm);