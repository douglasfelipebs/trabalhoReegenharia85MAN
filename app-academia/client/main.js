import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { $ } from 'meteor/jquery';

// dataTable
import dataTablesBootstrap from 'datatables.net-bs';
import 'datatables.net-bs/css/dataTables.bootstrap.css';
dataTablesBootstrap(window, $);

// select2
import 'select2';
import 'select2/dist/css/select2.css';
import 'select2-bootstrap-theme/dist/select2-bootstrap.css';

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
