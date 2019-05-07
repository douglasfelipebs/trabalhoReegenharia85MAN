import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Template.main.events({
  'click #cad_aluno'(event, instance) {
    FlowRouter.go('alunos');
  },
  'click #tela2'(event, instance) {
    FlowRouter.go('tela2');
  },
});
