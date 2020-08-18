import { ClientFunction } from 'testcafe';
import HomePage from '../pageModels/beezHomepage';
import ErrorMessages from '../resources/errorMessages';
import Url from '../pageModels/urls';
import BeezHomePage from "../pageModels/beezHomepage";
import TestData from "../resources/testData";

fixture("Test Suite - Beez WebSite")
    .page(Url.baseUrl)

const getDocumentURI = require('../resources/utils.js').getDocumentURI;

test("Test that the Login page is opening successfully: smoke", async t => {
    await t
        .click(HomePage.signInButton)

    const getUri = ClientFunction(() => {
        return getDocumentURI();
    }, { dependencies: { getDocumentURI } });

    const uri = await getUri();

    await t.expect(uri).eql(Url.loginPageUrl);
});

test("Test empty Username error messages: regression", async t => {
    await t
        .click(HomePage.signInButton)
        .click(HomePage.usernameTextBox)
        .click(HomePage.authenticationButton)
        .expect(BeezHomePage.usernameError.innerText).eql(ErrorMessages.emptyUsernameMessageRo)
});

test("Test empty Password error messages: regression", async t => {
    await t
        .click(HomePage.signInButton)
        .click(HomePage.passwordTextBox)
        .click(HomePage.authenticationButton)
        .expect(BeezHomePage.usernameError.innerText).eql(ErrorMessages.emptyPasswordMessageRo)
});

test("Test incorrect Email and incorrect Password: sanity", async t => {
    await t
        .click(HomePage.signInButton)
        .typeText(HomePage.usernameTextBox, TestData.email)
        .typeText(HomePage.passwordTextBox, TestData.password)
        .click(HomePage.authenticationButton)
        .expect(HomePage.signInErrorMessage.innerText).contains(ErrorMessages.incorrectCredentialsRo)
});