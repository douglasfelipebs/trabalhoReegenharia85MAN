/* global arrayTracker, SimpleSchema, AutoForm */

let parseOptions = function (options) {
    let hash = (options || {}).hash || {};

    // To fix schema names that should be with .$. (object arrays).
    if (hash && hash.name) {
        hash.name = hash.name.replace(/.[0-9]+./g, ".$.");
    }

    // Find the form's schema
    let ss = AutoForm.getFormSchema();
    return Object.assign({}, hash, {ss: ss});
};

/*
 * Global template helpers (exported to app)
 */

/*
 * afFieldIsRequired
 */
Template.registerHelper('afFieldIsRequired', function (options) {
    options = parseOptions(options, 'afFieldIsRequired');
    let formId = AutoForm.getFormId();

    return !options.ss.namedContext(formId)._schema[options.name].optional;
});

Template.registerHelper('afFieldHasValue', function (options) {
    options = parseOptions(options, 'afFieldHasValue');
    let formId = AutoForm.getFormId();

    let currentValue = AutoForm.getFieldValue(options.name, formId);
    return currentValue !== undefined;
});