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
        .click(HomePage.continueButton)
        .expect(BeezHomePage.usernameError.innerText).eql(ErrorMessages.emptyUsernameMessageEn)
});

test("Test empty Password error messages: regression", async t => {
    await t
        .click(HomePage.signInButton)
        .typeText(HomePage.usernameTextBox, TestData.email)
        .click(HomePage.continueButton)
        .click(HomePage.passwordTextBox)
        .click(HomePage.authenticationButton)
        .expect(BeezHomePage.usernameError.innerText).eql(ErrorMessages.emptyPasswordMessageEn)
});

test("Test successful login: regression", async t => {
    await t
    .click(HomePage.signInButton)
    .typeText(HomePage.usernameTextBox, TestData.email)
    .click(HomePage.continueButton)
    .typeText(HomePage.passwordTextBox, TestData.password)
    .click(HomePage.authenticationButton)
    .expect(HomePage.addToCartButton.exists).notOk();
});

test("Test incorrect Password error messages: regression", async t => {
    await t
        .click(HomePage.signInButton)
        .typeText(HomePage.usernameTextBox, TestData.email)
        .click(HomePage.continueButton)
        .typeText(HomePage.passwordTextBox, TestData.incorrectPassword)
        .click(HomePage.authenticationButton)
        .expect(BeezHomePage.PasswordError.innerText).eql(ErrorMessages.incorrectCredentialsEn)
});