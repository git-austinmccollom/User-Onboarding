describe('register app', () => {

    const nameField = () => cy.get('input[name="name"]')
    const emailField = () => cy.get('input[name="email"]')
    const passwordField = () => cy.get('input[name="password"]')
    const checkField = () => cy.get('input[name="terms"]')

    describe('Inputs, submit, and cancel button', () => {
        it('Navigate to http://localhost:3000/', () => {
            cy.visit('http://localhost:3000/')
            cy.url().should( 'include', 'localhost')
        })
        it('test that the submit button is disabled', () => {
            cy.get('button').should('be.disabled')
        })
        it('test name field', () => {
            nameField()
                .type('Firstname Lastname')
                .should('have.value', 'Firstname Lastname')
        })
        it('test email field', () => {
            emailField()
                .type('name@gmail.com')
                .should('have.value', 'name@gmail.com')
        })
        it('test password field', () => {
            passwordField()
                .type('random1234')
                .should('have.value', 'random1234')
        })
        it('test terms checkbox', () => {
            checkField()
                .check()
                .should('have.value', 'true')
        })
        it('test that the submit button is enabled', () => {
            cy.get('button').should('be.enabled')
        })
        it('test submit button', () => {
            cy.get('button').click()
        })
    })
    describe('user cards', () => {
        it('check card', () => {
            cy.get('.sc-AxirZ > :nth-child(1)')
                .contains('name: Firstname Lastname')
            cy.get('.sc-AxirZ > :nth-child(2)')
                .contains('email: name@gmail.com')
        })
    })
})