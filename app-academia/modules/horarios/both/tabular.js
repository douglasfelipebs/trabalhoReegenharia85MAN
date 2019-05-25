import Tabular from 'meteor/aldeed:tabular';
import moment from 'moment';

TabularTables.Horarios = new Tabular.Table({
  name: "Horarios",
  collection: Horarios,
  responsive: true,
  pub: 'tabular_horarios',
  order: [0, 'asc'],
  columns: [
    {
      data: "codigo",
      title: "Código",
      width: '15%'
    },
    {
      title: "Dias",
      data: "diaSemana",
      render: function (val, type, doc) {
        let strDias = "";
        val.forEach(function (current) {
          strDias += `${current} / `;
        });
        strDias = strDias.substring(0, strDias.length - 3);
        return strDias;
      }
    },
    {
      title: 'Início',
      data: 'horaInicio',
    },
    {
      title: 'Fim',
      data: 'horaFim',
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