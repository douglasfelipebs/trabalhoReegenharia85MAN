Meteor.methods({
    "get_free_search_result": function (input, context, selector) {
        var Collection = Meteor.Collection.get(context.options.collection.name);

        selector[context.options.freeSearch.searchAttribute] = input;

        var entry = Collection.findOne(selector);

        if (!entry) {
            selector[context.options.freeSearch.searchAttribute] = parseInt(input);
            entry = Collection.findOne(selector);
        }

        if (entry) {
            return entry._id;
        } else {
            return false;
        }
    }
});
