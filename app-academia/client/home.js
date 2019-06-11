import _ from 'lodash';

Template.home.onCreated(function () {
  const instance = this;

  instance.alunos_cadastrados = new ReactiveVar(0);
  instance.alunos_matriculados = new ReactiveVar(0);
  instance.profissionais_cadastrados = new ReactiveVar(0);
  instance.total_vendas = new ReactiveVar(0);

  instance.subscribe('count_alunos');
  instance.subscribe('count_matriculas');
  instance.subscribe('count_profissionais');
  instance.subscribe('total_vendas');

  instance.autorun(function () {
    if(instance.subscriptionsReady()) {
      //Alunos Cadastrados
      const alunos_cadastrados = Alunos.find({}).count();
      instance.alunos_cadastrados.set(alunos_cadastrados);
      //Alunos Matriculados
      const alunos_matriculados = MatriculaHorarios.find({}).fetch();
      const uniq = _.uniqBy(alunos_matriculados, 'aluno_id');
      instance.alunos_matriculados.set(uniq.length);
      //Profissionais Cadastrados
      const profissionais_cadastrados = Profissionais.find({}).count();
      instance.profissionais_cadastrados.set(profissionais_cadastrados);
      //Total de vendas
      const vendas = Vendas.find({}).fetch();
      let total_vendas = 0;
      vendas.forEach(function (current) {
        total_vendas += current.total_compra;
      });
      instance.total_vendas.set(total_vendas);
    }
  })

});

Template.home.helpers({
  alunos_cadastrados: function () {
    return Template.instance().alunos_cadastrados.get();
  },
  alunos_matriculados: function () {
    return Template.instance().alunos_matriculados.get();
  },
  profissionais_cadastrados: function () {
    return Template.instance().profissionais_cadastrados.get();
  },
  total_vendas: function () {
    return Template.instance().total_vendas.get();
  }
});