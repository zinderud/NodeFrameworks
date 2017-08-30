import { NewsPageClientPage } from './app.po';

describe('news-page-client App', function() {
  let page: NewsPageClientPage;

  beforeEach(() => {
    page = new NewsPageClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
