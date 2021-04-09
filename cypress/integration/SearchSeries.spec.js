describe('Search Series', () => {
    const api_url = 'https://api-comics.herokuapp.com'

    it('Visit Series', () => {

        //visit url
        cy.visit('http://localhost:8080/series')

    })

    it('GET All series', () => {

        cy.intercept({
            method: 'GET',
            url: `${api_url}/series`,
        }).as('apiCheck')

        cy.visit('http://localhost:8080/series')
        cy.wait('@apiCheck').then((interception) => {
            assert.isNotNull(interception.response.body, 'API call has data')
        })

    })

    it('Search', () => {

        //input keyword
        cy.get('input[name=Search]').type("wolverine")

        //Click Search button
        cy.get('button').contains('Search').click()

        //assert correct URL
        cy.url().should('contain', 'http://localhost:8080/series')
    })

    it('Search Results fetched', () => {

        cy.intercept({
            method: 'GET',
            url: `${api_url}/searchseries`,
        }).as('apiCheck')
        cy.wait('@apiCheck').then((interception) => {
            assert.isNotNull(interception.response.body, 'API call has data')
        })

    })

})
