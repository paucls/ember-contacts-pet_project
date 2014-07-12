/**
 * Contact Model Tests
 */

var container, store;

module("App.Contact", {
    setup: function() {
        container = new Ember.Container();
        container.register('store:main', DS.Store);
        container.register('model:contact', App.Contact);

        store = container.lookup('store:main');
    }
});

test('sets passed attributes', function() {
    var contact;

    Ember.run(function() {
        contact = store.createRecord('contact', {
            firstName: 'Tom',
            phone: '123456'
        });
    });

    equal(contact.get('firstName'), 'Tom');
    equal(contact.get('phone'), '123456');
});

test('sets a field after creation', function() {
    var contact;

    Ember.run(function() {
        contact = store.createRecord('contact', {
            firstName: 'Tom',
            phone: '123456'
        });
    });

    equal(contact.get('firstName'), 'Tom');

    Ember.run(function() {
        contact.set('firstName', 'Tomas');
    });

    equal(contact.get('firstName'), 'Tomas');
});