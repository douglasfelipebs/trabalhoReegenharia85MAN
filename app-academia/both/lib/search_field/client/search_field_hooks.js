Template.searchField.onCreated(function () {
    let instance = this;
    let data = instance.data;
    let options = data.options;
    let subscription = options && options.subscription;

    if (subscription) {
        instance.subscribe(subscription.name, subscription.params, subscription.callback);
    }

    instance.value = new ReactiveVar();

    // setup search modal configurations, this variable is used when showing/creating the search modal.
    instance.searchFieldModalOptions = {
        template: Template.searchFieldSelectableList,
        title: options.field.placeholder,
        modalDialogClass: "share-modal-dialog modal-lg",
        modalBodyClass: "share-modal-body",
        modalFooterClass: "share-modal-footer",
        removeOnHide: true,
        doc: data
    };

    if (options.addBtn) {
        // setup add modal configurations, this variable is used when showing/creating the add modal.
        instance.addModalOptions = {
            template: Template[options.addBtn.template],
            title: options.addBtn.modalTitle,
            modalDialogClass: "share-modal-dialog modal-lg",
            modalBodyClass: "share-modal-body",
            modalFooterClass: "share-modal-footer",
            removeOnHide: true,
            doc: data
        };
    }

    // Set initial value for search_field session.
    if (options.session) {
        Session.set(getCurrentSearchFieldSessionName(instance), null);
    }
});

Template.searchField.onRendered(function () {
    let instance = this;
    let options = instance.data.options;

    if (options.field) {
        if (options.field.onRendered) {
            options.field.onRendered(instance.data);
        }
    }
});

Template.searchField.onDestroyed(function () {
    let instance = this;
    let options = instance.data.options;

    // When template is destroyed, resets search_field session.
    if (options.session) {
        Session.set(getCurrentSearchFieldSessionName(instance), undefined);
    }
});