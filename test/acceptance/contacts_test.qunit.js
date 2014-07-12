/**
 * Integration Tests Setup
 */
document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

App.rootElement = '#ember-testing';
App.setupForTesting();
App.injectTestHelpers();

/**
 * Landing Page Tests
 */
module("Contacts Landing Page", {
    teardown: function () {
        App.reset();
    }
});

test("displays a welcome message", function () {
    expect(1); // Ensure that we will perform one assertion

    visit("/");

    // Wait for asynchronous helpers above to complete
    andThen(function () {
        equal(find(".starter-template h1").text(), "Welcome To Contacts");
    });
});

/**
 * Manage Contacts Tests
 */
module("Manage Contacts", {
    teardown: function () {
        App.reset();
        App.injectContactFixtures(App); //reset fixtures
    }
});

test("displays the header", function () {
    visit("contacts");

    andThen(function () {
        equal(find(".page-header").text(), "Manage Contacts");
    });
});

test("displays list of contacts", function () {
    visit("contacts");

    andThen(function () {
        var contactsRows = find("tbody tr");
        equal(contactsRows.length, 2, "There should be two contacts in the table");
    });
});

test("goes to 'contacts.create' on 'Create Contact...' link is clicked", function () {
    visit("contacts");
    click("div.sidebar .create_contact");

    andThen(function () {
        equal(currentRouteName(), "contacts.create", "Link went to a non expected route");
    });
});

test("creates a new contact", function(){
    expect(2);

    visit("/contacts/create");

    fillIn("input.firstName", "Martin");
    fillIn("input.lastName", "Mulder");
    fillIn("input.company", "CC Corp");
    fillIn("input.phone", "123456");
    fillIn("input.email", "martin@cccorp.com");
    fillIn("input.address", "5th Avenue");
    fillIn("textarea.notes", "My notes...");

    click("button.create");

    andThen(function() {
        equal(currentRouteName(), "contacts.index", "Expected to have been redirected to contacts");
        var contactRows = find("tbody tr");
        equal(contactRows.length, 3, "There should be three contacts in the table");
    });
});

test("removes a contact", function () {
    visit("contacts");

    click("tr#1 span.glyphicon-remove"); // contact 1 remove icon

    andThen(function () {
        var contactRow = find("tr#1");
        equal(contactRow.length, 0, "Deleted contact should not be present in the table");
    });
});

test("edits a contact", function () {
    expect(2);

    visit("contacts");

    click("tr#1 span.glyphicon-edit"); // contact 1 edit icon

    fillIn("input.firstName", "Adrian");

    click("button.update");

    andThen(function () {
        equal(currentRouteName(), "contacts.index", "Expected to have been redirected to contacts");
        var contactRows = find("tr#1");
        ok(contactRows.text().indexOf("Adrian") > -1, "Edited first name is not present");
    });
});

