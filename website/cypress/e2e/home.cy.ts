/// <reference types="cypress" />

describe('Home Page', () => {
    beforeEach(() => {
        cy.visit('/')

        cy.eyesOpen({
            appName: 'Personal Website',
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
        cy.eyesClose()
    })
})