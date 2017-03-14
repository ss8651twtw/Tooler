import { ToolerPage } from './app.po';

describe('tooler App', () => {
  let page: ToolerPage;

  beforeEach(() => {
    page = new ToolerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tooler works!');
  });
});
