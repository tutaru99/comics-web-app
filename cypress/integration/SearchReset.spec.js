
describe('Search for Character', () => {
    it('Visit characters', () => {

        //visit url
        cy.visit('http://localhost:8080/characters')

    })

    it('GET All characters', () => {

        cy.intercept({
            method: 'GET',
            url: 'http://localhost:4000/characters',
        }).as('apiCheck')

        cy.visit('http://localhost:8080/characters')
        cy.wait('@apiCheck').then((interception) => {
            assert.isNotNull(interception.response.body, 'API call has data')
        })

    })

    it('Search Wolverine', () => {

        //input keyword
        cy.get('input[name=Search]').type("wolverine")

        //Click Search button
        cy.get('button').contains('Search').click()

        //assert correct URL
        cy.url().should('contain', 'http://localhost:8080/characters')
    })


    it('Search Results fetched', () => {
        cy.intercept({
            method: 'GET',
            url: 'http://localhost:4000/char',
         }).as('apiCheck')
         cy.wait('@apiCheck').then((interception) => {
            assert.isNotNull(interception.response.body, 'API call has data')
         })
    })

    it('Reset Search', () => {


        //Click Search button
        cy.get('#SearchReset').click()

        //assert correct URL
        cy.url().should('contain', 'http://localhost:8080/characters')
    })

    it('Search Venom', () => {

        //input keyword
        cy.get('input[name=Search]').type("Venom (Mac Gargan)")

        //Click Search button
        cy.get('button').contains('Search').click()

        //assert correct URL
        cy.url().should('contain', 'http://localhost:8080/characters')
    })
    it('Venom Details', () => {

        cy.contains('Venom (Mac Gargan)').click()
    })

})