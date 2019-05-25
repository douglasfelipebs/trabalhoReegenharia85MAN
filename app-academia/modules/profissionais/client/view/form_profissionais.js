import _ from 'lodash';

Template.form_profissionais.onCreated(function () {
  const instance = this;

  const doc = instance.data.doc;
  const subsReady = instance.data.subsReady;

  instance.possuiPS = new ReactiveVar(false);
  instance.praticaEsporte = new ReactiveVar(false);
  instance.fazPorOutroMotivo = new ReactiveVar(false);
  instance.soubePorProfissional = new ReactiveVar(false);

  if (doc) {
    instance.autorun(function () {
      if (doc.get() && subsReady.get()) {
        instance.possuiPS.set(_.get(doc.get(), 'questionario.possuiPlanoSaude') === 'S');
        instance.praticaEsporte.set(_.get(doc.get(), 'questionario.praticaEsporte') === 'S');
      }
    });
  }
});

Template.form_profissionais.onRendered(function () {
  VMasker(this.find('[name=\'contato.telefone\']')).maskPattern('(99) 9999-9999');
  VMasker(this.find('[name=\'contato.celular\']')).maskPattern('(99) 9 9999-9999');
  VMasker(this.find('[name=\'endereco.cep\']')).maskPattern('99999-999');
});

Template.form_profissionais.helpers({
  possuiPS: () => Template.instance().possuiPS.get(),
  praticaEsporte: () => Template.instance().praticaEsporte.get(),
  fazPorOutroMotivo: () => (parseInt(Template.instance().fazPorOutroMotivo.get()) === 9),
  soubePorProfissional: () => (parseInt(Template.instance().soubePorProfissional.get()) === 10),
  pqFazOptions: function () {
    return [
      {value: '1', label: 'Aprender a nadar'},
      {value: '2', label: 'Bronquite'},
      {value: '3', label: 'Coluna'},
      {value: '4', label: 'Obesidade'},
      {value: '5', label: 'Treinar'},
      {value: '6', label: 'Manter a forma'},
      {value: '7', label: 'Gestante'},
      {value: '8', label: 'Conselho Médico'},
      {value: '9', label: 'Outros'},
    ];
  },
  comoSoubeOptions: function () {
    return [
      {value:'1', label:'Jornal'},
      {value:'2', label:'Placa'},
      {value:'3', label:'Cartaz'},
      {value:'4', label:'Panfleto'},
      {value:'5', label:'Amigos'},
      {value:'6', label:'Outdoor'},
      {value:'7', label:'Internet'},
      {value:'8', label:'Passando em Frente'},
      {value:'9', label:'Outros'},
      {value:'10', label: 'Profissional da Academia'},
    ];
  }
});

Template.form_profissionais.events({
  'change [name$=possuiPlanoSaude]': function (event, instance) {
    const val = event.target.value;
    if (val && val === 'S') {
      instance.possuiPS.set(true);
    } else {
      instance.possuiPS.set(false);
    }
  },
  'change [name$=praticaEsporte]': function (event, instance) {
    const val = event.target.value;
    if (val && val === 'S') {
      instance.praticaEsporte.set(true);
    } else {
      instance.praticaEsporte.set(false);
    }
  },
  'change [name$=porqueFazAcademia]': function (event, instance) {
    instance.fazPorOutroMotivo.set(event.target.value);
  },
  'change [name$=comoSoube]': function (event, instance) {
    instance.soubePorProfissional.set(event.target.value);
  },
});