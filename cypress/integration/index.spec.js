context('User is not logged in', () => {
  describe('Index page', () => {
    it('displays a form to create a new account', () => {
      cy.visit('/');
      cy.get('input[data-cy=name]').should('have.value', '');
      cy.get('input[data-cy=email]').should('have.value', '');
      cy.get('input[data-cy=password]').should('have.value', '');
      cy.get('[data-cy=create-account-button]').should('be.visible');
    });
  });
});
