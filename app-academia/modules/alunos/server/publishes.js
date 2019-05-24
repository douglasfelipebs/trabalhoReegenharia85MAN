Meteor.publish("single_aluno", function (_id) {
  const aluno = Alunos.find({_id});
  return aluno;
});
Meteor.publish("tabular_alunos", function () {
  return Alunos.find({}, {fields: {codigo: 1, nome: 1, dtNasc: 1}});
});