import { PiedmontPipersPage } from './app.po';

describe('piedmont-pipers App', () => {
  let page: PiedmontPipersPage;

  beforeEach(() => {
    page = new PiedmontPipersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pp works!');
  });
});
