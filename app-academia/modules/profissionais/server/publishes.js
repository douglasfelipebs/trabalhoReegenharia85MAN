Meteor.publish("single_profissional", function (_id) {
  const profissional = Profissionais.find({_id});
  return profissional;
});

Meteor.publish("tabular_profissionais", function () {
  return Profissionais.find({}, {fields: {codigo: 1, nome: 1, areaAtuacao: 1}});
});

Meteor.publish("count_profissionais", function () {
  return Profissionais.find({}, {fields: {_id: 1}});
});