Template.searchFieldSelectableList.onRendered(function () {
    let options = this.data && this.data.options;

    if (options.modal && options.modal.onRendered) {
        options.modal.onRendered(options);
    }
});

Template.searchFieldSelectableList.events({
    "click tbody > tr": function (event) {
        let id = $(event.target).parent().attr("_id");

        $("[name='" + getCurrentSearchFieldName() + "']").val(id).trigger("change");

        // Close the modal.
        closeReactiveModal(event.target);
    }
});

Template.searchFieldSelectableList.helpers({
    tableId: function () {
        let table = this.options && this.options.table;

        if (table.tableId) {
            return table.tableId;
        }
    },
    table: function () {
        // check if tableName parameter was given, and if so, return the
        // requested table in the parameter to the template
        let table = this.options && this.options.table;

        if (table.tableName && TabularTables[table.tableName]) {
            return TabularTables[table.tableName];
        } else {
            console.error("[search_field] Table '" + table.tableName + "' not found. Check table options values.");
        }
    },
    selector: function () {
        let instance = Template.instance();

        return getCurrentSearchFieldSelector(instance);
    }
});

Template.searchFieldSelectableList.onDestroyed(function () {
    // When there is more than one modal open, add the class again.
    if ($('.modal').length > 1) {
        $('body').addClass("modal-open");
    }
});
