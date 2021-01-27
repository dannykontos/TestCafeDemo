import { Selector } from 'testcafe';

class BeezHomePage {
  constructor() {
    this.signInButton = Selector('body > app-root > app-landing-page > div.landing_page > div.header > div.header_buttons > div');
    this.usernameTextBox = 'input[name="email"]';
    this.passwordTextBox = 'input[type="password"]';
    this.usernameError = Selector('.mat-error');
    this.authenticationButton = 'button[class="mat-focus-indicator btn_login mat-button mat-button-base"]';
    this.continueButton = 'button[class="mat-focus-indicator btn_login mat-button mat-button-base"]';
    this.signInErrorMessage = 'mat-error[id="mat-error-0"]';
    this.addToCartButton = Selector('body > app-root > div.app-container.ng-star-inserted > main > app-home > div > app-home-page > div > div > app-beez-pay > button.mat-focus-indicator.btn_add_product.ng-tns-c175-70.mat-fab.mat-button-base.mat-primary');
    this.PasswordError = Selector('body > div.cdk-overlay-container');
  }
}
export default new BeezHomePage();
