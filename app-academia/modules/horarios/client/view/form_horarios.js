import _ from 'lodash';

Template.form_horarios.onCreated(function () {
  const instance = this;
});

Template.form_horarios.onRendered(function () {
});

Template.form_horarios.helpers({
  diasDaSemanaOptions: function () {
    return [
      {value: 'Seg', label: 'Segunda'},
      {value: 'Ter', label: 'Terça'},
      {value: 'Qua', label: 'Quarta'},
      {value: 'Qui', label: 'Quinta'},
      {value: 'Sex', label: 'Sexta'},
      {value: 'Sab', label: 'Sábado'},
      {value: 'Dom', label: 'Domingo'},
    ];
  },
});

Template.form_horarios.events({
});