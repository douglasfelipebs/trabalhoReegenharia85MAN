SchemaVendas = {};

let ssVendas = {
  tipo_comprador: {
    type: String,
    optional: false,
    label: "Venda para",
    autoform: {
      firstOption: false,
      options: function () {
        return {
          'aluno': "Aluno",
          'visitante': "Visitante"
        }
      }
    }
  },
  aluno_id: {
    type: String,
    optional: true,
    label: 'Aluno',
    custom: function () {
      const tipo_comprador = this.field('tipo_comprador').value;
      if (tipo_comprador === 'aluno' && (this.value === '' || this.value === undefined || this.value === null)) {
        return 'required';
      }
    }
  },
  visitante_nome: {
    type: String,
    optional: true,
    label: "Nome do Visitante",
    custom: function () {
      const tipo_comprador = this.field('tipo_comprador').value;
      if (tipo_comprador === 'visitante' && (this.value === '' || this.value === undefined || this.value === null)) {
        return 'required';
      }
    }
  },
  comprador_nome: {
    type: String,
    optional: true,
  },
  tipo_venda: {
    type: String,
    optional: false,
    label: "Tipo Venda",
    autoform: {
      firstOption: false,
      options: function () {
        return {
          'bar': "Bar",
          'loja': "Loja"
        }
      }
    }
  },
  produto_id: {
    type: String,
    optional: false,
    label: "Produto",
  },
  preco_unitario: {
    type: Number,
    optional: false,
    label: "Preço Unitário",
  },
  quantidade: {
    type: Number,
    optional: false,
    label: "Quantidade",
    autoValue: function () {
      return 1;
    }
  },
  total: {
    type: Number,
    optional: false,
    label: 'Total',
  },
  item_produto: {
    type: [Object],
    optional: false,
    label: 'Lista de Compra',
    blackbox: true,
  },
  total_compra: {
    type: Number,
    optional: false,
    label: "Total Compra"
  }
};

SchemaVendas.ssForm = new SimpleSchema(ssVendas);

Vendas.attachSchema(SchemaVendas.ssForm);

SchemaVendas.ssItemProduto = new SimpleSchema({
  tipo_comprador: {
    type: String,
    optional: false,
    label: "Venda para",
    autoform: {
      firstOption: false,
      options: function () {
        return {
          'aluno': "Aluno",
          'visitante': "Visitante"
        }
      }
    }
  },
  aluno_id: {
    type: String,
    optional: true,
    label: 'Aluno',
    custom: function () {
      const tipo_comprador = this.field('tipo_comprador').value;
      if (tipo_comprador === 'aluno' && (this.value === '' || this.value === undefined || this.value === null)) {
        return 'required';
      }
    }
  },
  visitante_nome: {
    type: String,
    optional: true,
    label: "Nome do Visitante",
    custom: function () {
      const tipo_comprador = this.field('tipo_comprador').value;
      if (tipo_comprador === 'visitante' && (this.value === '' || this.value === undefined || this.value === null)) {
        return 'required';
      }
    }
  },
  tipo_venda: {
    type: String,
    optional: false,
    label: "Tipo Venda",
    autoform: {
      firstOption: false,
      options: function () {
        return {
          'bar': "Bar",
          'loja': "Loja"
        }
      }
    }
  },
  produto_id: {
    type: String,
    optional: false,
    label: "Produto",
  },
  quantidade: {
    type: Number,
    optional: false,
    label: "Quantidade",
    autoValue: function () {
      return 1;
    }
  },
})