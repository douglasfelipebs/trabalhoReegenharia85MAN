import Tabular from 'meteor/aldeed:tabular';
import moment from 'moment';

new Tabular.Table({
  name: "Alunos",
  collection: Alunos,
  pub: 'tabular_alunos',
  columns: [
    {data: "codigo", title: "Código"},
    {data: "nome", title: "Nome"},
    {
      data: "dtNasc",
      title: "Data de Nascimento",
      render: function (val, type, doc) {
        if (val instanceof Date) {
          return moment(val).calendar();
        } else {
          return "Never";
        }
      }
    },
    {
      tmpl: Meteor.isClient && Template.edit_button
    }
  ]
});