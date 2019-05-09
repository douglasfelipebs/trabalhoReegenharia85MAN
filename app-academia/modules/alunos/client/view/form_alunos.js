
Template.form_alunos.onCreated(function () {
  const instance = this;

  instance.possuiPS = new ReactiveVar(false);
  instance.praticaEsporte = new ReactiveVar(false);

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