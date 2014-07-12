/**
 * Created by estebp on 27/05/2014.
 */
App.ContactController = Ember.ObjectController.extend({

    actions: {
        createContact: function() {

            // Create the new model
            var contact = this.store.createRecord('contact', {
                firstName: this.get('firstName'),
                lastName: this.get('lastName'),
                company: this.get('company'),
                phone: this.get('phone'),
                email: this.get('email'),
                address: this.get('address'),
                notes: this.get('notes')
            });

            // Save the new model
            contact.save();

            // Clear text field
            this.set('firstName', '');
            this.set('lastName', '');
            this.set('company', '');
            this.set('phone', '');
            this.set('email', '');
            this.set('address', '');
            this.set('notes', '');

            // Transition the application to contacts route
            return this.transitionToRoute('contacts');
        },

        removeContact: function () {
            var contact = this.get('model');
            contact.deleteRecord();
            contact.save();
        },

        updateContact: function() {
            var contact = this.get('model');
            contact.save();

            return this.transitionToRoute('contacts');
        },

        cancelChanges: function() {
            if (this.get('isNew')) {
                // Clear text field
                this.set('firstName', '');
                this.set('lastName', '');
                this.set('company', '');
                this.set('phone', '');
                this.set('email', '');
                this.set('address', '');
                this.set('notes', '');
            } else {
                var contact = this.get('model');
                contact.rollback();
            }

            return this.transitionToRoute('contacts');
        }
    }

});