import Tabular from 'meteor/aldeed:tabular';
import moment from 'moment';

TabularTables.Alunos = new Tabular.Table({
  name: "Alunos",
  collection: Alunos,
  responsive: true,
  pub: 'tabular_alunos',
  columns: [
    {
      data: "codigo",
      title: "Código",
      width: '15%'
    },
    {
      data: "nome",
      title: "Nome",
      width: '60%',
      render: function (val, type, doc) {
        return val.toUpperCase();
      }
    },
    {
      data: "dtNasc",
      title: "Data de Nascimento",
      render: function (val, type, doc) {
        if (val instanceof Date) {
          return moment(val).utc().format('DD/MM/YYYY');
        } else {
          return "Never";
        }
      },
    },
    {
      title: 'Editar',
      width: '10px',
      tmpl: Meteor.isClient && Template.edit_button
    }
  ]
});