import _ from 'lodash';

Template.form_profissionais.onCreated(function () {
});

Template.form_profissionais.onRendered(function () {
  VMasker(this.find('[name=\'contato.celular\']')).maskPattern('(99) 9 9999-9999');
});

Template.form_profissionais.helpers({
});