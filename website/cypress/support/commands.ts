/// <reference types="cypress" />
// ***********************************************
// https://on.cypress.io/custom-commands
// ***********************************************

declare namespace Cypress {
  interface Chainable {
    checkPageTitle(expectedTitle: string): Chainable<any>;
    checkExternalLink(href: string, shouldHaveTarget?: boolean): Chainable<any>;
    checkMediaLinks(): Chainable<any>;
    fillContactForm(
      name: string,
      email: string,
      message: string,
    ): Chainable<any>;
    checkMobileNavigation(): Chainable<any>;
    checkDesktopNavigation(): Chainable<any>;
    checkProfileImage(): Chainable<any>;
    checkFooter(): Chainable<any>;
  }
}

// Check page title contains expected text
Cypress.Commands.add('checkPageTitle', (expectedTitle: string) => {
  cy.title().should('contain', expectedTitle);
});

// Check external link attributes
Cypress.Commands.add(
  'checkExternalLink',
  (href: string, shouldHaveTarget = true) => {
    const selector = `a[href="${href}"]`;
    cy.get(selector).should('exist').and('be.visible');
    if (shouldHaveTarget) {
      cy.get(selector).should('have.attr', 'target', '_blank');
    }
  },
);

// Check common media links
Cypress.Commands.add('checkMediaLinks', () => {
  cy.checkExternalLink('https://www.linkedin.com/in/eliodinino/');
  cy.checkExternalLink('https://github.com/ElioDiNino');
  cy.checkExternalLink('/Resume.pdf');
});

// Fill contact form with test data
Cypress.Commands.add(
  'fillContactForm',
  (name: string, email: string, message: string) => {
    cy.get('input[name="user_name"]').clear().type(name);
    cy.get('input[name="user_email"]').clear().type(email);
    cy.get('textarea[name="message"]').clear().type(message);
  },
);

// Check mobile navigation functionality
Cypress.Commands.add('checkMobileNavigation', () => {
  cy.get('[aria-label="Open drawer"]').should('exist').should('be.visible');
  cy.get('.MuiDrawer-root > .MuiPaper-root').should('be.not.visible');
  cy.get('.MuiToolbar-root > :nth-child(1)').click();
  cy.get('.MuiDrawer-root > .MuiPaper-root').should('be.visible').as('drawer');
  cy.get('@drawer').contains('Home').should('be.visible');
  cy.get('@drawer').contains('Projects').should('be.visible');
  cy.get('@drawer').contains('Resume').should('be.visible');
  cy.get('@drawer').contains('Contact').should('be.visible');
});

// Check desktop navigation
Cypress.Commands.add('checkDesktopNavigation', () => {
  cy.get('nav').should('be.visible');
});

// Check profile image
Cypress.Commands.add('checkProfileImage', () => {
  cy.get('img[alt="Head shot of Elio smiling with a blurred background"]')
    .should('be.visible')
    .and('have.attr', 'src')
    .and('not.be.empty');
});

// Check footer elements
Cypress.Commands.add('checkFooter', () => {
  cy.get('#copyright')
    .should('be.visible')
    .and('contain', new Date().getFullYear());
  cy.get('#copyright').should('contain', 'Elio Di Nino');
});
