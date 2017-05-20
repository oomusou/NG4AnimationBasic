import { NG4AnimationBasicPage } from './app.po';

describe('ng4-animation-basic App', () => {
  let page: NG4AnimationBasicPage;

  beforeEach(() => {
    page = new NG4AnimationBasicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
