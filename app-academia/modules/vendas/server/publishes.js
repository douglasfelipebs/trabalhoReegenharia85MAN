Meteor.publish("single_venda", function (_id) {
  const venda = Vendas.find({_id});
  return venda;
});
Meteor.publish("tabular_vendas", function () {
  return Vendas.find({});
});