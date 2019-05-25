Meteor.publish("single_atividade", function (_id) {
  const atividade = Atividades.find({_id});
  return atividade;
});
Meteor.publish("tabular_atividades", function () {
  return Atividades.find({}, {fields: {codigo: 1, nome: 1, areaAtuacao: 1}});
});