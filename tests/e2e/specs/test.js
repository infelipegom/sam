describe('My First Test', function() {
  it('should visit the app root URL', function() {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Your Vue.js App')
  })
})
