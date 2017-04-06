import { ConneCtPage } from './app.po';

describe('conne-ct App', function() {
  let page: ConneCtPage;

  beforeEach(() => {
    page = new ConneCtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
