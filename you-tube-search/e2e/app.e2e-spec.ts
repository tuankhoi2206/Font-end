import { YouTubeSearchPage } from './app.po';

describe('you-tube-search App', () => {
  let page: YouTubeSearchPage;

  beforeEach(() => {
    page = new YouTubeSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
