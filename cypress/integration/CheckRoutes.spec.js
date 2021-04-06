describe('Go through all Sub Pages', ()=> {
    it('Success browsing', () => {

       //visit url
       cy.visit('http://localhost:8080/')

       //Routes
       cy.get('#charactersImg').click()
       cy.url().should('contain', 'http://localhost:8080/characters')

       cy.get('#comics').click()
       cy.url().should('contain', 'http://localhost:8080/comics')

       cy.get('#series').click()
       cy.url().should('contain', 'http://localhost:8080/series')

       cy.get('#stories').click()
       cy.url().should('contain', 'http://localhost:8080/stories')

       cy.get('#home').click()
       //assert if correct URL
       cy.url().should('contain', 'http://localhost:8080')

    })
})