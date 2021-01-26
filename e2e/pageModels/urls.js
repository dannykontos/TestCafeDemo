import { ClientFunction } from 'testcafe';

class Url {
  constructor() {
    this.getCurrentPageUrl = ClientFunction(() => window.location.href);
    this.baseUrl = 'https://test.use-beez.com/'
    this.loginPageUrl = 'https://test.use-beez.com/account/login';
    this.googleUrl = 'https://www.google.com';
  }
}
export default new Url(); 
