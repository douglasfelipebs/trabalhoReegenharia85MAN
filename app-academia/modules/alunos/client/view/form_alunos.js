
Template.form_alunos.onCreated(function () {
  const instance = this;

  instance.possuiPS = new ReactiveVar(false);
  instance.praticaEsporte = new ReactiveVar(false);
  instance.fazPorOutroMotivo = new ReactiveVar(false);
  instance.soubePorAluno = new ReactiveVar(false);
});

Template.form_alunos.onRendered(function () {
  VMasker(this.find("[name='contato.telefone']")).maskPattern("(99) 9999-9999");
  VMasker(this.find("[name='contato.celular']")).maskPattern("(99) 9 9999-9999");
  VMasker(this.find("[name='endereco.cep']")).maskPattern("99999-999");
});

Template.form_alunos.helpers({
  possuiPS: () => Template.instance().possuiPS.get(),
  praticaEsporte: () => Template.instance().praticaEsporte.get(),
  fazPorOutroMotivo: () => (parseInt(Template.instance().fazPorOutroMotivo.get()) === 9),
  soubePorAluno: () => (parseInt(Template.instance().soubePorAluno.get()) === 10),
});

Template.form_alunos.events({
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
    instance.soubePorAluno.set(event.target.value);
  },
});