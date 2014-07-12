/**
 * Created by estebp on 26/05/2014.
 */
window.App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

//App.ApplicationAdapter = DS.LSAdapter.extend({
//    namespace: 'contacts-emberjs'
//});