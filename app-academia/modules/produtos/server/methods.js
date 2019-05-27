Meteor.methods({
  insere_produto: function (doc) {
    return !!Produtos.insert(doc);
  },
  update_produto: function (update_doc) {
    return !!Produtos.update({_id: update_doc._id}, update_doc.update);
  },
  remove_produtos: function (_id) {
    return !!Produtos.remove({_id});
  }
});