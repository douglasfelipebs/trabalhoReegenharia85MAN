Meteor.publish("single_produto", function (_id) {
  const produto = Produtos.find({_id});
  return produto;
});
Meteor.publish("tabular_produtos", function () {
  return Produtos.find({});
});