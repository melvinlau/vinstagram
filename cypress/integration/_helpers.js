export const createAccount = () => {
  cy.visit('/');
  cy.get('input[data-cy=name]').type('Andrew');
  cy.get('input[data-cy=email]').type('andrew@glouberman.com');
  cy.get('input[data-cy=password]').type('123456');
  cy.get('[data-cy=create-account-button]').click();
}
