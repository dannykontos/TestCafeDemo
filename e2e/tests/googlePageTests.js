import Url from '../pageModels/urls';
import GooglePage from "../pageModels/googleHomepage";

fixture("First Test Suite - TestCafe Demo using Google")
  .page(Url.googleUrl)

test("My first test using Google Search functionality", async t => {
  await t
    .typeText(GooglePage.searchTextPlaceholder, 'testcafe')
    .click(GooglePage.searchButtonElement)
    .expect(GooglePage.firstResult.innerText).contains('TestCafe')
});