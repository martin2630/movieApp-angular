import { PeliculasPage } from './app.po';

describe('peliculas App', () => {
  let page: PeliculasPage;

  beforeEach(() => {
    page = new PeliculasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
