Vendas.before.insert(function (userId, doc) {
  if (doc.aluno_id) {
    const this_aluno = Alunos.findOne({_id: doc.aluno_id});
    doc.comprador_nome = this_aluno.nome;
  } else {
    doc.comprador_nome = doc.visitante_nome;
  }
});

Vendas.before.update(function (userId, doc, fieldNames, modifier, options) {
  if (modifier.$set) {
    if (modifier.$set.aluno_id) {
      const this_aluno = Alunos.findOne({_id: doc.aluno_id});
      modifier.$set.comprador_nome = this_aluno.nome;
    } else {
      modifier.$set.comprador_nome = modifier.$set.visitante_nome;
    }
  }
});