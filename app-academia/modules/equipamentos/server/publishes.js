Meteor.publish("single_equipamento", function (_id) {
  const equipamento = Equipamentos.find({_id});
  return equipamento;
});
Meteor.publish("tabular_equipamentos", function () {
  return Equipamentos.find({}, {fields: {codigo: 1, nome: 1, funcao: 1}});
});