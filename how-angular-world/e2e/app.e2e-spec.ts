import { HowAngularWorldPage } from './app.po';

describe('how-angular-world App', () => {
  let page: HowAngularWorldPage;

  beforeEach(() => {
    page = new HowAngularWorldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
