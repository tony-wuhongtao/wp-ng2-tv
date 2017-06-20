import { Wpng2Page } from './app.po';

describe('wpng2 App', () => {
  let page: Wpng2Page;

  beforeEach(() => {
    page = new Wpng2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
