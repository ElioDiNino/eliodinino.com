/// <reference types="cypress" />

describe('Home Page', () => {
    beforeEach(() => {
        cy.visit('/')

        cy.eyesOpen({
            // The name of the application under test
            appName: 'Personal Website',
            
            // The name of the test case for the given application
            testName: Cypress.currentTest.title,
        })
    })

    it('Home Page Layout', () => {
        cy.contains('Resume')
        cy.contains('Links')
        cy.contains('GitHub')

        cy.eyesCheckWindow({
            tag: "Home Page",
            target: 'window',
            fully: true,
            matchLevel: 'Layout'
        });
    })

    afterEach(() => {
        // Close Eyes to tell the server it should display the results
        cy.eyesClose()
    })
})