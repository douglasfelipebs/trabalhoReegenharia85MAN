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
    type: String,
    optional: false,
    label: 'Data de Nascimento',
  },
  sexo: {
    type: String,
    optional: false,
    label: 'Sexo',
  },
  ativo: {
    type: Boolean,
    label: 'Ativo',
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
    label: 'Possui Plano de Saúde',
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
  },
  'questionario.esportePraticado': {
    type: String,
    optional: true,
    label: 'Esporte Praticado',
  },
  'questionario.porqueFazAcademia': {
    type: String,
    optional: false,
    label: 'Porque faz academia',
  },
  'questionario.indicacao': {
    type: Object,
    optional: false,
  },
  'questionario.indicacao.comoSoube': {
    type: String,
    optional: false,
  },
  'questionario.indicacao.alunoIndicante': {
    type: String,
    optional: true,
  },
};

SchemaAlunos.ssForm = new SimpleSchema(ssAlunos);

Alunos.attachSchema(SchemaAlunos.ssForm);