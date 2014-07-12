/**
 * Created by estebp on 26/05/2014.
 */
App.Contact = DS.Model.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    company: DS.attr('string'),
    phone: DS.attr('string'),
    email: DS.attr('string'),
    address: DS.attr('string')
});

App.injectContactFixtures = function(app) {
    app.Contact.FIXTURES = [
        {
            id: 1,
            firstName: 'Addison',
            lastName: 'Reynolds',
            company: 'Ac Consulting',
            phone: '1-352-850-5507',
            email: 'addison@email.com',
            address: '7494 Penatibus Road',
            notes: 'CEO'
        },
        {
            id: 2,
            firstName: 'Bruce',
            lastName: 'Manning',
            company: 'Acme Industries',
            phone: '1-659-374-6176',
            email: 'bruce@email.com',
            address: '3139 Elementum St',
            notes: 'Field Engineer'
        }
    ];
};

App.injectContactFixtures(App);