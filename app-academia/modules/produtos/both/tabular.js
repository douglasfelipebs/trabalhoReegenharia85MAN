import Tabular from 'meteor/aldeed:tabular';
import moment from 'moment';

TabularTables.Produtos = new Tabular.Table({
  name: "Produtos",
  collection: Produtos,
  responsive: true,
  pub: 'tabular_produtos',
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