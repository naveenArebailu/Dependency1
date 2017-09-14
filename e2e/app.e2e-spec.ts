import { DepInjservice1Page } from './app.po';

describe('dep-injservice1 App', function() {
  let page: DepInjservice1Page;

  beforeEach(() => {
    page = new DepInjservice1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
