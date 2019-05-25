Meteor.methods({
  insere_equipamento: function (doc) {
    return !!Equipamentos.insert(doc);
  },
  update_equipamento: function (update_doc) {
    return !!Equipamentos.update({_id: update_doc._id}, update_doc.update);
  },
  remove_equipamentos: function (_id) {
    return !!Equipamentos.remove({_id});
  }
});