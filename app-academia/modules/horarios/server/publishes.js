Meteor.publish("single_horario", function (_id) {
  const horario = Horarios.find({_id});
  return horario;
});
Meteor.publish("tabular_horarios", function () {
  return Horarios.find({});
});