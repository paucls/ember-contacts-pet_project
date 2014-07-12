App.Router.map(function() {
    this.resource('contacts', function() {
        this.resource('contact', { path: '/:contactId' });
        this.route('create');
    });
});

App.ContactsRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('contact');
    }
});

App.ContactRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('contact', params.contactId);
    }
});

App.ContactsCreateRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        this.controllerFor('contact').setProperties({
            'model': model,
            'isNew': true /* computed property to identify new mode in template */
        });
    },
    renderTemplate: function() {
        this.render('contact');
    }
});
