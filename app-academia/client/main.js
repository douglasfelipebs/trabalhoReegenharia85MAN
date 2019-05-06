import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Template.main.events({
  'click #tela1'(event, instance) {
    FlowRouter.go('tela1');
  },
  'click #tela2'(event, instance) {
    FlowRouter.go('tela2');
  },
});
