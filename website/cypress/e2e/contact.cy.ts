/// <reference types="cypress" />

describe('Contact Page', () => {
    beforeEach(() => {
        cy.visit('/contact')

        cy.eyesOpen({
            // The name of the application under test
            appName: 'Personal Website',
            
            // The name of the test case for the given application
            testName: Cypress.currentTest.title,
        })
    })

    it('Contact Page Layout', () => {
        cy.eyesCheckWindow({
            tag: "Contact Page",
            target: 'window',
            fully: true,
        });

        cy.contains('Submit')
    })

    it ('Contact Page Form', () => {
        cy.get('input[name="user_name"]').type('Elio Di Nino').should('have.value', 'Elio Di Nino')
        cy.get('input[name="user_email"]').type('test@eliodinino.com').should('have.value', 'test@eliodinino.com')
        cy.get('textarea[name="message"]').type('This is a test message').should('have.value', 'This is a test message')
    })


    afterEach(() => {
        // Close Eyes to tell the server it should display the results
        cy.eyesClose()
    })
})