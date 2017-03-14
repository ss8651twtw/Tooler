import { browser, element, by } from 'protractor';

export class ToolerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tooler-root h1')).getText();
  }
}
