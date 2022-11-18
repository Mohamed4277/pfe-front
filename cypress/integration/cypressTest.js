const dateUtil=require('../../static/templateSSR/form')

it('visits base url', () => {
    cy.visit('/') 
    cy.get('#task').type('Tache 1 Cypress')
    cy.get('#description').type('Description 1 Cypress')
    cy.get('#dateDeadLine').type(dateUtil.dateDay())
    cy.get('#submit').click()
    cy.get('#table').contains('Tache 1 Cypress')
    cy.get('#dateDeadLine').type(dateUtil.dateDay())
    cy.get('#table').contains('Description 1 Cypress')
  })