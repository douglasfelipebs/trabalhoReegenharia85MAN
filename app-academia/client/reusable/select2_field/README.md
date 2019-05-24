Select2 field accepts the following parameters:
```
{
    isAfField: Boolean,
    
    label: String,
    multiple: Boolean,
    placeholder: String,
    
    name: String,
    value: Array,
    disabled: Boolean,
    tabindex: String,
}
```
If `isAfField` is `true`, then there's no need to pass params like `multiple`, `placeholder` and `label`. They are better to be informed in the schema.

To pass parameters to the field from the schema, use the object `autoform`. Here are some possible properties: 

```
label: "Empresa",
autoform: {
    type: "select", // MUST be informed.
    multiple: true, // Omit for single selection.
    firstOption: "", // For single selection, to render an empty field.
    "data-placeholder": "  (Selecionar)"
}
```