Meteor.methods({
  insere_profissional: function (doc) {
    return !!Profissionais.insert(doc);
  },
  update_profissional: function (update_doc) {
    return !!Profissionais.update({_id: update_doc._id}, update_doc.update);
  }
});