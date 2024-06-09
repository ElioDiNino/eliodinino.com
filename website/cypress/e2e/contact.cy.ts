/// <reference types="cypress" />

describe('Contact Page', () => {
    beforeEach(() => {
        cy.visit('/contact')
    })

    it('Contact Page Layout', () => {
        cy.eyesOpen({
            appName: 'Personal Website',
            testName: Cypress.currentTest.title,
        })
        cy.eyesCheckWindow({
            tag: "Contact Page",
            target: 'window',
            fully: true,
        });

        cy.contains('Submit')
        cy.eyesClose()
    })

    it('Contact Page Form', () => {
        cy.get('input[name="user_name"]').type('Elio Di Nino').should('have.value', 'Elio Di Nino')
        cy.get('input[name="user_email"]').type('test@eliodinino.com').should('have.value', 'test@eliodinino.com')
        cy.get('textarea[name="message"]').type('This is a test message').should('have.value', 'This is a test message')
    })
})