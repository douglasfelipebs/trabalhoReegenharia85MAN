import _ from 'lodash';

Template.form_vendas.onCreated(function () {
  const instance = this;

  instance.tipo_comprador = new ReactiveVar('aluno');
  instance.tipo_venda = new ReactiveVar('bar');
});

Template.form_vendas.onRendered(function () {
});

Template.form_vendas.helpers({
  itens: function () {
    return [

    ]
  },
  tipo_comprador: function () {
    return Template.instance().tipo_comprador.get();
  },
  tipo_venda: function () {
    return Template.instance().tipo_venda.get();
  }
});

Template.form_vendas.events({
  'change [name$=tipo_comprador]': function (event, instance) {
    instance.tipo_comprador.set(event.target.value);
  },
  'change [name$=tipo_venda]': function (event, instance) {
    instance.tipo_venda.set(event.target.value);
  }
});

AutoForm.hooks({
  "formCadastroVendas": {
    onSubmit: function (doc) {
      this.preventDefault();
      this.stopPropagation();
      console.log(doc);
    }
  }
})