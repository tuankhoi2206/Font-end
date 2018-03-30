import { HowAngularWorldDemoPage } from './app.po';

describe('how-angular-world-demo App', () => {
  let page: HowAngularWorldDemoPage;

  beforeEach(() => {
    page = new HowAngularWorldDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
