Template.searchField.events({
    "change input#value_input": function (event, instance) {
        instance.data.value = event.target.value;
        instance.value.set({
            value: event.target.value,
            fromEvent: true
        });
    },
    // when activating clean button, resets session and form input linked to the search_field
    "click .clean-btn-modal": function (event, instance) {
        let options = instance.data.options;

        // Hide clean button.
        $(event.target).hide();

        // Reset free search field.
        if (options.freeSearch) {
            $(instance.find("[name='" + getCurrentSearchFieldName() + "_freeSearch']")).val("");
        }

        // Reset text display field.
        $(instance.find("[name='" + getCurrentSearchFieldName() + "_textDisplay']")).val("");

        // if there's a returnValueToFieldAttr, insert returnValue into it
        if (options.field.valueStoringAttr) {
            $(instance.find("[name='" + getCurrentSearchFieldName() + "_textDisplay']")).attr(options.field.valueStoringAttr, "");
        }

        // Reset hidden field value.
        $(instance.find("[name='" + getCurrentSearchFieldName() + "']")).val("").trigger("change");

        // If exists any session set, reset it.
        if (options.session) {
            Session.set(getCurrentSearchFieldSessionName(instance), undefined);
        }
    },
    // showing the search modal
    "click #show_modal": function (event, instance) {
        let modal_options = instance.searchFieldModalOptions;
        ReactiveModal.initDialog(modal_options).show();
    },
    "click #add_btn": function (event, instance) {
        let modal_options = instance.addModalOptions;
        ReactiveModal.initDialog(modal_options).show();
    },
    "input [name$='_freeSearch']": function (event, instance) {
        let input = event.currentTarget.value;
        let context = instance.data;
        let options = context.options;
        let selector = getCurrentSearchFieldSelector(instance);
        let icon = $(instance.find("#show_modal i"));

        if (input && selector) {
            icon.attr("class", "fa fa-spin fa-gear");
            Meteor.call("get_free_search_result", input, context, selector, function (err, res) {
                if (err) {
                    console.log(err);
                }

                if (res) {
                    $("[name='" + getCurrentSearchFieldName(instance) + "']").val(res).trigger("change");

                    if (context.options.onSelected) {
                        context.options.onSelected(res, context.options);
                    }
                } else {
                    // Hide clean button.
                    $(instance.find(".clean-btn-modal")).hide();

                    // Reset text display field.
                    $(instance.find("[name='" + getCurrentSearchFieldName(instance) + "_textDisplay']")).val("");

                    // if there's a returnValueToFieldAttr, insert returnValue into it
                    if (options.field.valueStoringAttr) {
                        $(instance.find("[name='" + getCurrentSearchFieldName(instance) + "_textDisplay']")).attr(options.field.valueStoringAttr, "");
                    }

                    // Reset hidden field value.
                    $("[name='" + getCurrentSearchFieldName(instance) + "']").val("").trigger("change");

                    // If exists any session set, reset it.
                    if (options.session) {
                        Session.set(getCurrentSearchFieldSessionName(instance), undefined);
                    }
                }

                icon.attr("class", "fa fa-search");
            });
        }
    }
});