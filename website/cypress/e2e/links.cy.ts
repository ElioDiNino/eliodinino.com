/// <reference types="cypress" />

describe('Links Page', () => {
    beforeEach(() => {
        cy.visit('/links')

        cy.eyesOpen({
            // The name of the application under test
            appName: 'Personal Website',
            
            // The name of the test case for the given application
            testName: Cypress.currentTest.title,
        })
    })

    it('Links Page Layout', () => {
        cy.eyesCheckWindow({
            tag: "Links Page",
            target: 'window',
            fully: true,
        });

        cy.contains('Website')
        cy.contains('Contact')
        cy.contains('Resume')
    })

    afterEach(() => {
        // Close Eyes to tell the server it should display the results
        cy.eyesClose()
    })
})