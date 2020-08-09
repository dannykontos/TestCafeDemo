import { Selector } from 'testcafe';

class BeezHomePage {
  constructor() {
    this.signInButton = Selector('body > app-root > app-landing-page > div.landing_page > div.header > div.header_buttons > div');
    this.usernameTextBox = 'input[name="email"]';
    this.passwordTextBox = 'input[type="password"]';
    this.usernameError = Selector('.mat-error');
    this.authenticationButton = 'button[class="mat-focus-indicator btn_login mat-button mat-button-base"]';
    this.signInErrorMessage = Selector('.cdk-overlay-container');
  }
}
export default new BeezHomePage();
