
Template.form_alunos.onCreated(function () {
  const instance = this;

  instance.possuiPS = new ReactiveVar(false);
  instance.praticaEsporte = new ReactiveVar(false);

});

Template.form_alunos.onRendered(function () {
  VMasker(this.find("[name='contato.telefone']")).maskPattern("(99) 9999-9999");
  VMasker(this.find("[name='contato.celular']")).maskPattern("(99) 9 9999-9999");
  VMasker(this.find("[name='endereco.cep']")).maskPattern("99999-999");
});

Template.form_alunos.helpers({
  possuiPS: () => Template.instance().possuiPS.get(),
  praticaEsporte: () => Template.instance().praticaEsporte.get(),
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
});