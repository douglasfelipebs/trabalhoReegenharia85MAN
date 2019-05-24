Search field accepts the following parameters:
```
{
    label: String,
    name: String,
    value: XXX,
    disabled: Boolean,
    tabindex: String,
    
    options: {
        field: {
            label: String,
            placeholder: String,
            name: String
            isAfField: Boolean,
            valueStoringAttr: String,
            valueAttrFormat: String,
            allowCleanBtn: Boolean,
            onRendered: Function
        },
        table: {
            tableId: String,
            tableName: String,
            customSelector: Object,
            overrideDefaultSelector: Boolean
        },
        modal: {
            onRendered: Function
        },
        collection: {
            name: String,
            entryReferenceAttr: String
        },
        session: {
            name: String
        },
        freeSearch: {
            placeholder: String,
            searchAttribute: String,
            width: String
        },
        addBtn: {
            modalTitle: String,
            template: String
        },
        updateSubscription: {
            name: String
        },
        onSelected: Function
    }
}
```