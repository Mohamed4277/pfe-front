describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('#userName').type('b@b.fr')
    cy.get('#password').type('12')
    cy.get('#submit-to-enter').click()
    cy.get('#add-item').click()
    cy.get("#cart").click()
    cy.get("#order").click()
    cy.get("#validate").click()
    cy.get("#return-to-home").click()
  })
})