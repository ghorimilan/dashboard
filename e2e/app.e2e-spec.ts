import { MyDashboardPage } from './app.po';

describe('my-dashboard App', () => {
  let page: MyDashboardPage;

  beforeEach(() => {
    page = new MyDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
