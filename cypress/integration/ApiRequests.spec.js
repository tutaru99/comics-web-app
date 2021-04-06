describe('API fetch Requests', () => {
  it('GET Characters', () => {

    cy.intercept({
      method: 'GET',
      url: 'http://localhost:4000/characters',
    }).as('apiCheck')

    cy.visit('http://localhost:8080/characters')
    cy.wait('@apiCheck').then((interception) => {
      assert.isNotNull(interception.response.body, '1st API call has data')
    })
  })
  it('GET Comics', () => {

    cy.intercept({
      method: 'GET',
      url: 'http://localhost:4000/comics',
    }).as('apiCheck')

    cy.visit('http://localhost:8080/comics')
    cy.wait('@apiCheck').then((interception) => {
      assert.isNotNull(interception.response.body, '2nd API call has data')
    })

  })
  it('GET Series', () => {

    cy.intercept({
      method: 'GET',
      url: 'http://localhost:4000/series',
    }).as('apiCheck')

    cy.visit('http://localhost:8080/series')
    cy.wait('@apiCheck').then((interception) => {
      assert.isNotNull(interception.response.body, '3nd API call has data')
    })

  })
  it('GET Stories', () => {

    cy.intercept({
      method: 'GET',
      url: 'http://localhost:4000/stories',
    }).as('apiCheck')

    cy.visit('http://localhost:8080/stories')
    cy.wait('@apiCheck').then((interception) => {
      assert.isNotNull(interception.response.body, '4th API call has data')
    })

  })

  it('GET Characters', () => {

    cy.intercept({
      method: 'GET',
      url: 'http://localhost:4000/characters',
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

 it('Pagination Results', () => {

  cy.intercept({
     method: 'GET',
     url: 'http://localhost:4000/characters',
  }).as('apiCheck')
  cy.wait('@apiCheck').then((interception) => {
     assert.isNotNull(interception.response.body, 'API call has data')
  })

})

})