/**
 * Contact Controller Tests
 */

// inject test helpers onto window
emq.globalize();

// if you don't have a custom resolver, do it like this:
setResolver(Ember.DefaultResolver.create({namespace: App}));

moduleFor('controller:contact', 'Contact Controller');

test("sets a property in its model", function() {
    // get the controller instance
    var ctrl = this.subject();

    // wrap the test in the run loop because we are dealing with async functions
    Ember.run(function() {
        // set a generic model on the contact controller
        ctrl.set('model', Ember.Object.create({ firstName: 'A Name' }));
        equal(ctrl.get('model').get('firstName'), 'A Name');

        // set a property in the model
        ctrl.set('firstName', 'A Name Edited');
        equal(ctrl.get('model').get('firstName'), 'A Name Edited');
    });
});