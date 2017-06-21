import { Angular4SimpleTodoPage } from './app.po';

describe('angular4-simple-todo App', () => {
  let page: Angular4SimpleTodoPage;

  beforeEach(() => {
    page = new Angular4SimpleTodoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
