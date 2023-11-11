describe('template spec', () => {

  it('should pass the requirements',()=>{
    cy.visit('/')

    cy.get('video').should('exist')
    cy.get('video').its('0.paused').should('eq', false)

    cy.wait(5000)

    cy.get('button').contains('pause/play').click()

    cy.get('video').its('0.paused').should('eq', true)

    cy.visit('/hospital')

    cy.get('img').should('have.length.at.least',3)

  })
})