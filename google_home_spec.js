describe('Google Home Page Test', () => {
  it('should load the page and check the title', () => {
    cy.visit('https://www.google.com');
    cy.title().should('eq', 'Google');
  });
});
