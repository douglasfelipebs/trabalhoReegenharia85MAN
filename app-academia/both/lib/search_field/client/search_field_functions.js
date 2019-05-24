getCurrentSearchFieldName = function (instance) {
    let data = instance ? instance.data : Template.instance().data;

    if (data.name) {
        return data.name;
    } else if (data.options && data.options.field) {
        return data.options.field.name;
    }
};

getCurrentSearchFieldLabel = function (instance) {
    let data = instance ? instance.data : Template.instance().data;

    if (data.label) {
        return data.label;
    } else if (data.options && data.options.field) {
        return data.options.field.label;
    }
};

getCurrentSearchFieldSelector = function (instance) {
    let data = instance ? instance.data : Template.instance().data;

    if (data.options) {
        let table = data.options.table;
        let selector = {};

        // This iterate through the customSelector props.
        for (let prop in table.customSelector) {
            if (table.customSelector.hasOwnProperty(prop)) {
                // Check for functions to call.
                if (typeof table.customSelector[prop] === "function") {
                    // Create the same prop in 'selector' Object and call the function.
                    selector[prop] = table.customSelector[prop]();
                } else {
                    // Create the same prop in 'selector' Object with the same value.
                    selector[prop] = table.customSelector[prop];
                }
                // Check if the obtained value is undefined.
                if (selector[prop] === undefined) {
                    console.error("[search_field] Selector's prop '" + prop + "' is undefined. Check customSelector value sources.");
                    return;
                }
            }
        }

        return selector;
    }
};

getCurrentSearchFieldSessionName = function (instance) {
    let data = instance ? instance.data : Template.instance().data;

    if (data.name) {
        return data.name;
    } else if (data.options && data.options.session) {
        if (data.options.session.name) {
            return data.options.session.name;
        } else {
            return getCurrentSearchFieldName(instance);
        }
    }
};
