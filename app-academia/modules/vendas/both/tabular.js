import Tabular from 'meteor/aldeed:tabular';
import moment from 'moment';

TabularTables.Vendas = new Tabular.Table({
  name: "Vendas",
  collection: Vendas,
  responsive: true,
  pub: 'tabular_vendas',
  order: [0, 'asc'],
  columns: [
    {
      data: "codigo",
      title: "Código",
    },
    {
      data: "nome",
      title: "Nome",
      render: function (val) {
        if (val) return val.toUpperCase();
        return '';
      }
    },
    {
      data: "tipo",
      title: "Tipo",
      render: function (val) {
        if (val) return val.toUpperCase();
        return '';
      }
    },
    {
      data: "preco",
      title: "Preço",
      render: function (val) {
        if (val) return `R$ ${val}`;
        return 'Erro ao encontrar o preço';
      }
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