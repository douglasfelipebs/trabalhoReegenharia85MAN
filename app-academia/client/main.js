import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Template.main.events({
  'click #cad_aluno'(event, instance) {
    $('.active').removeClass('active');
    $('#alunos').addClass('active');
    FlowRouter.go('alunos');
  },
  'click #home'(event, instance) {
    $('.active').removeClass('active');
    $('#home').addClass('active');
    FlowRouter.go('home');
  },
});
