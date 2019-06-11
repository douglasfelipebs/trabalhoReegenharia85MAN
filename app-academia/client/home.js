Template.home.onCreated(function () {
  const instance = this;

  instance.alunos_cadastrados = new ReactiveVar(0);
  instance.alunos_matriculados = new ReactiveVar(0);

  instance.subscribe('count_alunos');
  instance.subscribe('count_matriculas');

  instance.autorun(function () {
    if(instance.subscriptionsReady()) {
      const alunos_cadastrados = Alunos.find({}).count();
      instance.alunos_cadastrados.set(alunos_cadastrados);
      const alunos_matriculados = MatriculaHorarios.find({}).count();
      instance.alunos_matriculados.set(alunos_matriculados);
    }
  })

});

Template.home.helpers({
  alunos_cadastrados: function () {
    return Template.instance().alunos_cadastrados.get();
  },
  alunos_matriculados: function () {
    return Template.instance().alunos_matriculados.get();
  }
})