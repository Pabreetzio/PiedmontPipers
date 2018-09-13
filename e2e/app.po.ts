import { browser, by, element } from 'protractor';

export class PiedmontPipersPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pp-root h1')).getText();
  }
}
