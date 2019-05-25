import Tabular from 'meteor/aldeed:tabular';
import moment from 'moment';

TabularTables.Profissionais = new Tabular.Table({
  name: "Profissionais",
  collection: Profissionais,
  responsive: true,
  pub: 'tabular_profissionais',
  order: [0, 'asc'],
  columns: [
    {
      data: "codigo",
      title: "Código",
      width: '15%'
    },
    {
      data: "nome",
      title: "Nome",
      width: '60%',
      render: function (val, type, doc) {
        return val.toUpperCase();
      }
    },
    {
      data: "areaAtuacao",
      title: "Área de Atuação",
      render: function (val, type, doc) {
        switch (val) {
          case 'personal':
            return 'Personal Trainer';
          case 'coach':
            return 'Coach';
          case 'natacao':
            return 'Professor de Natação';
          case 'edFisica':
            return 'Professor de Educação Física';
          case 'outro':
            return 'Outros';
        }
      },
    },
    {
      title: 'Editar',
      width: '10px',
      tmpl: Meteor.isClient && Template.edit_button
    },
    {
      title: 'Remover',
      width: '10px',
      tmpl: Meteor.isClient && Template.remove_button
    }
  ]
});