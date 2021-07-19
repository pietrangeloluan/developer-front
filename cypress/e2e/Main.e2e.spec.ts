describe('Main', () => {
  it('should render the page title', () => {
    cy.visit('http://localhost:3000')
    // cy.get('h1').should('to.contain', 'Developer')
  })
})

export {}
