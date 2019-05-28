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
      data: "tipo_comprador",
      title: "Venda para:",
      width: '15%',
      render: function (val) {
        if (val) return val.toUpperCase();
        return '';
      }
    },
    {
      data: "comprador_nome",
      title: "Nome",
      width: '70%',
      render: function (val) {
        if (val) return val.toUpperCase();
        return '';
      },
    },
    {
      data: "total_compra",
      title: "Total da Compra",
      width: '15%',
      render: function (val) {
        if (val) return `R$ ${val}`;
        return 'Erro ao encontrar o preço';
      }
    },
  ]
});