import { Selector } from 'testcafe';

class GooglePage {
  constructor() {
    this.searchTextPlaceholder = 'input[name="q"]';
    this.searchButtonElement = 'input[name="btnK"]';
    this.firstResult = Selector('#res h3');
  }
}
export default new GooglePage();
