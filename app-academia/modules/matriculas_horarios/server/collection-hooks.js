MatriculaHorarios.before.insert(function (userId, doc) {
  const aluno_id = doc.aluno_id;
  const profissional_id = doc.profissional_id;
  const atividade_id = doc.atividade_id;
  const equipamento_id = doc.equipamento_id;

  const this_aluno = Alunos.findOne({_id: aluno_id});
  const this_profissional = Profissionais.findOne({_id: profissional_id});
  const this_atividade = Atividades.findOne({_id: atividade_id});
  const this_equipamento = Equipamentos.findOne({_id: equipamento_id});

  doc.atividade_nome = this_atividade.nome;
  doc.local_atividade_nome = this_atividade.localAtividade;
  doc.aluno_nome = this_aluno.nome;
  doc.equipamento_nome = this_equipamento.nome;
  doc.profissional_nome = this_profissional.nome;
});