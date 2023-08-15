/// <reference types="cypress" />

describe('Links Page', () => {
    beforeEach(() => {
        cy.visit('/links')
        // Wait up to 10 seconds for the background image to load
        cy.get('.background', { timeout: 10000 })
          .should('be.visible')
          .then($el => {
            const url = $el.css('background-image').match(/url\("(.*)"\)/)[1]
            cy.request({url, failOnStatusCode: false})
              .its('status')
              .should('eq', 200)
          })
          .wait(1000)

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