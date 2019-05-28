Meteor.methods({
  insere_venda: function (doc) {
    return !!Vendas.insert(doc);
  },
  update_venda: function (update_doc) {
    return !!Vendas.update({_id: update_doc._id}, update_doc.update);
  },
  remove_vendas: function (_id) {
    return !!Vendas.remove({_id});
  }
});