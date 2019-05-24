import _ from "lodash";

Template.searchField.helpers({
    searchFieldName: getCurrentSearchFieldName,
    searchFieldLabel: getCurrentSearchFieldLabel,
    searchFieldPlaceholder: function () {
        let data = Template.instance().data;

        if (data.placeholder) {
            return data.placeholder;
        } else {
            return data.options.field.placeholder;
        }
    },
    searchFieldValue: function () {
        let instance = Template.instance();
        let options = this;

        let reactiveVarValue = instance.value.get();
        let templateValue = instance.data.value;

        let Collection = Meteor.Collection.get(options.collection.name);
        let entry;

        if (reactiveVarValue && reactiveVarValue.fromEvent && reactiveVarValue.value === templateValue) {
            // console.log("Value from reactive var.");

            if (options.onSelected) {
                options.onSelected(reactiveVarValue.value, instance.data);
            }

            entry = Collection.findOne({_id: reactiveVarValue.value});
        } else if (templateValue) {
            // console.log("Value from template.");

            instance.value.set("");

            if (options.updateSubscription) {
                Meteor.subscribe(options.updateSubscription.name, templateValue);
            }

            let selector = {};

            if (options.collection.entryReferenceAttr) {
                selector[options.collection.entryReferenceAttr] = templateValue;
            } else {
                selector._id = templateValue;
            }

            entry = Collection.findOne(selector);
        }

        if (!entry) {
            return;
        }

        let returnLabel = ""; // The text display
        let returnValue = ""; // The hidden _id (or entryReferenceAttr)

        /** Set returnLabel */
        // if there's a returnString, replace string that were wrapped by square brackets
        // by its corresponding attributes from the selected entry
        if (options.field.valueAttrFormat) {
            // get attributes from the entry that were requested in returnString
            // for example: "[name] / [state_sigla]"
            // result of regExp match: ["name", "state_sigla"]
            let customStringRequestedAttrs = options.field.valueAttrFormat.match(/[^[\]]+(?=])/g);

            // replace the parts of the string that were used to indicate
            // which fields will appear in the label by its value, one by one
            // result example: "RIO DO SUL / SC"
            returnLabel = options.field.valueAttrFormat;

            for (let i in customStringRequestedAttrs) {
                let attr_label = customStringRequestedAttrs[i];
                let attr_value = "";
                if ((attr_label === "federalNumber" || attr_label === "inscricaoFederal") && _.get(entry, attr_label)) {
                    attr_value = formatFederalNumber(_.get(entry, attr_label));
                } else {
                    attr_value = _.get(entry, attr_label);
                }

                if (attr_value) {
                    returnLabel = returnLabel.replace("[" + attr_label + "]", attr_value);
                } else {
                    returnLabel = returnLabel.replace("[" + attr_label + "]", "-");
                }
            }
        }

        // Text display field.
        let textDisplayField = $("[name='" + getCurrentSearchFieldName() + "_textDisplay']");

        // Set the entry name to text display.
        textDisplayField.val(returnLabel);

        // if there's a valueStoringAttr, insert returnValue into it.
        if (options.field.valueStoringAttr) {
            textDisplayField.attr(options.field.valueStoringAttr, returnValue);
        }

        // if cleanBtn is allowed, show it.
        if (options.field.allowCleanBtn) {
            $("[name='" + getCurrentSearchFieldName() + "_textDisplay'] ~ span .clean-btn-modal").show();
        }

        /** Set returnValue */
        // if there's a returnEntryAttrAsValue, set returnValue to the
        // requested attr in returnEntryAttrAsValue option. Else, set
        // returnValue to the default attr: _id
        if (options.collection && options.collection.entryReferenceAttr) {
            returnValue = entry[options.collection.entryReferenceAttr];
        } else {
            returnValue = entry._id;
        }

        /** Set session */
        // if there's a sessionVariableName, insert returnValue into it.
        if (options.session && options.session.setOnSelect) {
            if (options.session.storedEntryAttr) {
                Session.set(getCurrentSearchFieldSessionName(instance), entry[options.session.storedEntryAttr]);
            } else {
                Session.set(getCurrentSearchFieldSessionName(instance), returnValue);
            }
        }

        /** Set free search */
        // If there's a freeSearch attribute, set the respective value into it.
        if (options.freeSearch && options.freeSearch.searchAttribute) {
            let freeSearchField = $("[name='" + getCurrentSearchFieldName() + "_freeSearch']");
            let searchAttributeValue = _.get(entry, options.freeSearch.searchAttribute);
            if (searchAttributeValue) {
                freeSearchField.val(searchAttributeValue);
            } else {
                freeSearchField.val("");
            }
        }
    }
});
