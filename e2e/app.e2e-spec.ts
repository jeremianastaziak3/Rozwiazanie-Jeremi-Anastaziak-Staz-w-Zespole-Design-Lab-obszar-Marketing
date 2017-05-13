import { AllegroInternPage } from './app.po';

describe('allegro-intern App', () => {
  let page: AllegroInternPage;

  beforeEach(() => {
    page = new AllegroInternPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
