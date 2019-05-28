// Vendas.before.insert(function (userId, doc) {
//   if (doc.preco) {
//     doc.preco = doc.preco.replace(/[^0-9-,]/g, '');
//     doc.preco = doc.preco.replace(',', '.');
//   }
// });
//
// Vendas.before.update(function (userId, doc, fieldNames, modifier, options) {
//   if (modifier.$set) {
//     if (modifier.$set.preco) {
//       modifier.$set.preco = modifier.$set.preco.replace(/[^0-9-,]/g, '');
//       modifier.$set.preco = modifier.$set.preco.replace(',', '.');
//       console.log(modifier);
//     }
//   }
// });