SchemaProdutos = {};

let ssProdutos = {
  codigo: {
    type: Number,
    optional: false,
    label: 'Código',
  },
  nome: {
    type: String,
    optional: false,
    label: 'Nome'
  },
  descricao: {
    type: String,
    optional: true,
    label: "Descrição",
    autoform: {
      type: 'textarea'
    }
  },
  tipo: {
    type: String,
    optional: false,
    label: 'Tipo de Venda',
    autoform: {
      firstOption: false,
      options: function () {
        return {
          'loja': 'Loja',
          'bar': 'Bar'
        }
      }
    }
  },
  preco: {
    type: Number,
    optional: false,
    label: "Preço",
  },
};

SchemaProdutos.ssForm = new SimpleSchema(ssProdutos);

Produtos.attachSchema(SchemaProdutos.ssForm);