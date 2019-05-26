Horarios.before.insert(function (userId, doc) {
  const diasSemana = doc.diaSemana.join(' - ');
  doc.nome = `${diasSemana}, das ${doc.horaInicio} às ${doc.horaFim}`;
});