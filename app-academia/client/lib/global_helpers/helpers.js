/**
 * Global helpers (miscellaneous).
 */
Template.registerHelper('issuing_entity_list', function() {
	return Session.get('issuing_entity_list');
});

Template.registerHelper('formatDateToBrazilian', function(date) {
	return formatDateToBrazilian(date);
});

Template.registerHelper('equals', function(a, b) {
	return a === b;
});

Template.registerHelper('larger', function(a, b) {
	return a > b;
});

Template.registerHelper('largerOREquals', function(a, b) {
  return a >= b;
});

Template.registerHelper('logicalOR', function(a, b) {
	return a || b;
});

Template.registerHelper('logicalAND', function(...args) {
	return args.every(arg => !!arg);
});

Template.registerHelper('logicalNOT', function(a) {
	return !a;
});

Template.registerHelper('concat', function(a = '', b = '') {
	return String(a) + String(b);
});

Template.registerHelper('hasInputDate', function() {
	return Modernizr.inputtypes.date;
});

Template.registerHelper('print', function(a) {
	console.log(a);
});
Template.registerHelper('parseInt', function(s) {
	return parseInt(s);
});

Template.registerHelper('toLowerCase', function(s) {
	return (s || '').toLowerCase();
});
Template.registerHelper('toUpperCase', function(s) {
	return (s || '').toUpperCase();
});
Template.registerHelper('toCapitalize', function(s) {
	return (s || '').replace(/^\w/, c => c.toUpperCase());
});
