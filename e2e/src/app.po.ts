import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

  getAppTitle() {
    return element(by.xpath('/html/body/app-root/app-toolbar/mat-toolbar/span[1]')).getText() as Promise<string>;
  }
}
