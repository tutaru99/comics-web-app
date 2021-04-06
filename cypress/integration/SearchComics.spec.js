describe('Search Comics', () => {
    it('Visit Comics', () => {

        //visit url
        cy.visit('http://localhost:8080/comics')

    })

    it('GET All comics', () => {

        cy.intercept({
            method: 'GET',
            url: 'http://localhost:4000/comics',
        }).as('apiCheck')

        cy.visit('http://localhost:8080/comics')
        cy.wait('@apiCheck').then((interception) => {
            assert.isNotNull(interception.response.body, 'API call has data')
        })

    })

    it('Search', () => {

        //input keyword
        cy.get('input[name=Search]').type("punisher")

        //Click Search button
        cy.get('button').contains('Search').click()

        //assert correct URL
        cy.url().should('contain', 'http://localhost:8080/comics')
    })

    it('Search Results fetched', () => {

        cy.intercept({
            method: 'GET',
            url: 'http://localhost:4000/searchcomics',
        }).as('apiCheck')
        cy.wait('@apiCheck').then((interception) => {
            assert.isNotNull(interception.response.body, 'API call has data')
        })

    })

})
