import _ from 'lodash';

Template.vendas_insert.onCreated(function () {
  const instance = this;

  instance.tipo_comprador = new ReactiveVar('aluno');
  instance.tipo_venda = new ReactiveVar('bar');
  instance.itens_venda = new ReactiveVar([]);
});

Template.vendas_insert.onRendered(function () {
});

Template.vendas_insert.helpers({
  itens: function () {
    return Template.instance().itens_venda.get();
  },
  itens_venda_reactive: function () {
    return Template.instance().itens_venda;
  },
  tipo_comprador: function () {
    return Template.instance().tipo_comprador.get();
  },
  tipo_venda: function () {
    return Template.instance().tipo_venda.get();
  },
  total_compra: function () {
    let total_compra = 0;
    const itens_compra = Template.instance().itens_venda.get();
    itens_compra.forEach(function (item) {
      total_compra += item.valor_total;
    });
    return `R$ ${total_compra.toFixed(2)}`;
  }
});

Template.vendas_insert.events({
  'change [name$=tipo_comprador]': function (event, instance) {
    instance.tipo_comprador.set(event.target.value);
  },
  'change [name$=tipo_venda]': function (event, instance) {
    instance.tipo_venda.set(event.target.value);
  },
  'click #remove_item_button': function (event, instance) {
    const this_id = event.currentTarget.parentElement.id;
    let current_itens = instance.itens_venda.get();
    current_itens = current_itens.filter(function (item) {
      return item._id !== this_id;
    });
    instance.itens_venda.set(current_itens);
  }
});

AutoForm.hooks({
  formCadastroVendas: {
    onSubmit: function (doc) {
      const self = this;
      self.event.preventDefault();
      self.event.stopPropagation();

      const itens = self.template.data.itens;
      doc.item_produto = itens;

      let total_compra = 0;
      itens.forEach(function (item) {
        total_compra += (item.valor_total);
      });
      doc.total_compra = total_compra;

      Meteor.call('insere_venda', doc, function (err, result) {
        $('[type=submit]').removeAttr('disabled');
        if (!err && result) {
          $("#formCadastroVendas").trigger('reset');
          swal('Sucesso!', 'Venda realizada com sucesso!', 'success');
          FlowRouter.go('app', {
            menu_router_link: 'vendas',
          })
        } else {
          swal('Erro!', 'Ocorreu um erro ao gerar esta Venda!', 'error');
        }
      });
    }
  },
  formCadastroItemProduto: {
    onSubmit: function (doc) {
      const self = this;
      self.event.preventDefault();
      self.event.stopPropagation();
      const current_list = self.template.data.itens_venda.get();

      const this_produto = Produtos.findOne({_id: doc.produto_id, tipo: doc.tipo_venda});
      if (this_produto){
        const new_item = {
          _id: doc.produto_id,
          nome: this_produto.nome.toUpperCase(),
          valor_unitario: this_produto.preco.toFixed(2),
          quantidade: doc.quantidade,
          valor_total: doc.quantidade * this_produto.preco
        };
        current_list.push(new_item);
      }

      self.template.data.itens_venda.set(current_list);
      $('[type=submit]').removeAttr('disabled');
      $('#formCadastroItemProduto').trigger('reset');
    }
  }
});