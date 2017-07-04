import { TmpPage } from './app.po';

describe('tmp App', function() {
  let page: TmpPage;

  beforeEach(() => {
    page = new TmpPage();
  });

  it('should display message saying appOld works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('appOld works!');
  });
});
