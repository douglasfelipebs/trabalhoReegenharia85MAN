Meteor.methods({
  insere_venda: function (doc) {
    return !!Vendas.insert(doc);
  },
});