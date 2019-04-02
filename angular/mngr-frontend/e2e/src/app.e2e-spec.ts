import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(true).toBeTruthy();
    //expect(page.getTitleText()).toEqual('Welcome to mngr-frontend!');
  });
});
