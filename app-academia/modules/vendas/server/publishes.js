Meteor.publish("single_venda", function (_id) {
  const venda = Vendas.find({_id});
  return venda;
});
Meteor.publish("tabular_vendas", function () {
  return Vendas.find({});
});

Meteor.publish("total_vendas", function () {
  return Vendas.find({}, {fields: {_id: 1, total_compra: 1}});
});