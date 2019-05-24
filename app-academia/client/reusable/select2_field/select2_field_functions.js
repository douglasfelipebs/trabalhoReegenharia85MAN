getCurrentSelect2FieldName = function (instance) {
    let data = instance ? instance.data : Template.instance().data;

    if (data.name) {
        return data.name;
    } else if (data.options && data.options.name) {
        return data.options.name;
    }
};

getCurrentSelect2FieldLabel = function (instance) {
    let data = instance ? instance.data : Template.instance().data;

    if (data.hasOwnProperty("label")) {
        return data.label;
    } else if (data.options && data.options.label) {
        return data.options.label;
    }
};