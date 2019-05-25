import Tabular from 'meteor/aldeed:tabular';
import moment from 'moment';

TabularTables.Equipamentos = new Tabular.Table({
  name: "Equipamentos",
  collection: Equipamentos,
  responsive: true,
  pub: 'tabular_equipamentos',
  order: [0, 'asc'],
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
      title: 'Função',
      data: 'funcao',
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