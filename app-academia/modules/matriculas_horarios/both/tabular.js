import Tabular from 'meteor/aldeed:tabular';
import moment from 'moment';

TabularTables.MatriculaHorarios = new Tabular.Table({
  name: "MatriculaHorarios",
  collection: MatriculaHorarios,
  responsive: true,
  pub: 'tabular_matriculas_horarios',
  order: [0, 'asc'],
  columns: [
    {
      data: "codigo",
      title: "Código",
    },
    {
      data: "atividade_nome",
      title: "Atividade",
      render: function (val, type, doc) {
        return val.toUpperCase();
      }
    },
    {
      data: 'local_atividade_nome',
      title: 'Local da Atividade',
      render: function (val, type, doc) {
        return val.toUpperCase();
      }
    },
    {
      data: 'equipamento_nome',
      title: 'Equipamento',
      render: function (val, type, doc) {
        return val.toUpperCase();
      }
    },
    {
      data: 'horario_id',
      title: 'Dia Semana',
      render: function (val, type, doc) {
        const horario = Horarios.findOne({_id: val});
        return horario.diaSemana.join(' - ');
      }
    },
    {
      data: 'horario_id',
      title: 'Início',
      render: function (val) {
        const horario = Horarios.findOne({_id: val});
        return horario.horaInicio;
      }
    },
    {
      data: 'horario_id',
      title: 'Final',
      render: function (val) {
        const horario = Horarios.findOne({_id: val});
        return horario.horaFim;
      }
    },
    {
      data: 'profissional_nome',
      title: 'Professor',
    },
    {
      title: 'Editar',
      width: '10px',
      tmpl: Meteor.isClient && Template.edit_button
    },
    {
      title: 'Remover',
      width: '10px',
      tmpl: Meteor.isClient && Template.remove_button
    }
  ]
});