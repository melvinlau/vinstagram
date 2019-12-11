import { createAccount } from './_helpers';

context('Creating a new account', () => {
  it('logs the user in and displays their name', () => {
    createAccount();
    cy.get('body').contains('Andrew'); 
  });
});
