Template.select2Field.onCreated(function () {
    let instance = this;
    let data = instance.data;

    // Function to add options to the select2 field.
    instance.addOptionsToSelect = (array) => {
        const select2 = $(instance.find("select[name='" + data.name + "']"));
        const currSelect2Val = (select2.val() || []);

        array.forEach(function (array_pos) {
            if(currSelect2Val.indexOf(array_pos.value) === -1){
                select2.append($('<option>').val(array_pos.value).text(array_pos.label));
            }
        });
    };

    // Add loading icon to this field.
    instance.addLoadingIcon = () => {
        addLoadingIcon(instance.find(".form-group ul.select2-selection__rendered"));
    };
    // Remove loading icon from this field.
    instance.removeLoadingIcon = () => {
        removeLoadingIcon(instance.find(".form-group"));
    };
});

Template.select2Field.onRendered(function () {
    let instance = this;
    let data = instance.data;

    // Build field params.
    let field_params = {
        language: select2_ptbr_translation,
    };
    if (data.placeholder) {
        field_params.placeholder = "  " + data.placeholder;
    }
    // Initiate the select2 field.
    $(instance.find("[name='" + data.name + "']")).select2(field_params);

    //adicionado direto no css
    // Custom css.
    // $(instance.find(".select2-search__field")).css("min-width", "5em");
    // $(instance.find(".select2-container--default")).css("width", "100%"); // Sometimes field didn't fill all the space.
    // // Makes the field appearance equal to normal fields.
    // $(instance.find(".select2-selection")).css("border", "2px solid #e8ebed");
    // $(instance.find(".select2-selection")).css("border-radius", "2px");
    // $(instance.find(".select2-selection")).css("min-height", "37px");
    // // For single value fields, the field were smaller. So it fixes that.
    // $(instance.find("span.select2-selection__rendered")).css("padding-top", "3px");
    // $(instance.find("span.select2-selection__arrow")).css("height", "32px");
});

