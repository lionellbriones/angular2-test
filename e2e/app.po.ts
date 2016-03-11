export class OfficePage {
  navigateTo() { return browser.get('/'); }
  getParagraphText() { return element(by.css('Office-app p')).getText(); }
}
