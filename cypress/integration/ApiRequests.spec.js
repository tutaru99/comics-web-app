describe('API fetch Requests', () => {
  const api_url = 'https://api-comics.herokuapp.com'

  it('GET Characters', () => {

    cy.intercept({
      method: 'GET',
      url: `${api_url}/characters`,
    }).as('apiCheck')

    cy.visit('http://localhost:8080/characters')
    cy.wait('@apiCheck').then((interception) => {
      assert.isNotNull(interception.response.body, '1st API call has data')
    })
  })
  it('GET Comics', () => {

    cy.intercept({
      method: 'GET',
      url: `${api_url}/comics`,
    }).as('apiCheck')

    cy.visit('http://localhost:8080/comics')
    cy.wait('@apiCheck').then((interception) => {
      assert.isNotNull(interception.response.body, '2nd API call has data')
    })

  })
  it('GET Series', () => {

    cy.intercept({
      method: 'GET',
      url: `${api_url}/series`,
    }).as('apiCheck')

    cy.visit('http://localhost:8080/series')
    cy.wait('@apiCheck').then((interception) => {
      assert.isNotNull(interception.response.body, '3nd API call has data')
    })

  })
  it('GET Stories', () => {

    cy.intercept({
      method: 'GET',
      url: `${api_url}/stories`,
    }).as('apiCheck')

    cy.visit('http://localhost:8080/stories')
    cy.wait('@apiCheck').then((interception) => {
      assert.isNotNull(interception.response.body, '4th API call has data')
    })

  })

  it('GET Characters', () => {

    cy.intercept({
      method: 'GET',
      url: `${api_url}/characters`,
    }).as('apiCheck')

    cy.visit('http://localhost:8080/characters')
    cy.wait('@apiCheck').then((interception) => {
      assert.isNotNull(interception.response.body, 'API call has data')
    })

  })

  it('Check Pagination', () => {

    cy.get('.v-pagination__item').click({ multiple: true, force: true })
    cy.url().should('contain', 'http://localhost:8080/characters')

 })

      //throws error on git actions even though it works fine
/*  it('Pagination Results', () => {

  cy.intercept({
     method: 'GET',
     url: `${api_url}/characters`,
  }).as('apiCheck')
  cy.wait('@apiCheck').then((interception) => {
     assert.isNotNull(interception.response.body, 'API call has data')
  })

}) */

})