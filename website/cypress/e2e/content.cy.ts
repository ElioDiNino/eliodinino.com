/// <reference types="cypress" />

describe('Content Tests', () => {
  describe('Home Page', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('should display main content correctly', () => {
      // Check basic page elements
      cy.checkPageTitle('Elio Di Nino');
      cy.contains('Hi there!').should('be.visible');
      cy.contains('Elio Di Nino').should('be.visible');
      cy.checkProfileImage();

      // Check content sections
      cy.contains('## README.md').should('be.visible');
      cy.contains('## Branching Out').should('be.visible');
      cy.contains('## New PRs').should('be.visible');
      cy.contains('## Queued Actions').should('be.visible');
    });

    it('should have working social media links', () => {
      cy.checkMediaLinks();
      cy.checkExternalLink('https://photography.eliodinino.com');
      cy.checkExternalLink('https://www.instagram.com/eliodinino/');
    });

    it('should have footer with copyright', () => {
      cy.checkFooter();
    });

    it('should be responsive', () => {
      cy.viewport('samsung-s10');
      cy.checkMobileNavigation();
      cy.viewport(1200, 800);
      cy.checkDesktopNavigation();
    });
  });

  describe('Contact Page', () => {
    beforeEach(() => {
      cy.visit('/contact');
    });

    it('should display contact form', () => {
      cy.checkPageTitle('Contact - Elio Di Nino');
      cy.get('input[name="user_name"]').should('be.visible');
      cy.get('input[name="user_email"]').should('be.visible');
      cy.get('textarea[name="message"]').should('be.visible');
      cy.get('button[type="submit"]').should('be.visible');
    });

    it('should validate form inputs', () => {
      // Test empty fields validation
      cy.get('input[name="user_name"]').focus().blur();
      cy.get('input[name="user_name"]')
        .invoke('prop', 'validity')
        .should('have.property', 'valueMissing', true);

      // Test form filling
      cy.fillContactForm('Test User', 'test@example.com', 'Test message');
      cy.get('input[name="user_name"]').should('have.value', 'Test User');
      cy.get('input[name="user_email"]').should(
        'have.value',
        'test@example.com',
      );

      // Skip checking submit button state as it is controlled by reCAPTCHA

      // Test email validation
      cy.get('input[name="user_email"]').clear().type('invalid-email').blur();
      cy.get('input[name="user_email"]')
        .invoke('prop', 'validity')
        .should('have.property', 'valid', false);
    });

    it('should have footer', () => {
      cy.checkFooter();
    });

    it('should be responsive', () => {
      cy.viewport('samsung-s10');
      cy.checkMobileNavigation();
      cy.viewport(1200, 800);
      cy.checkDesktopNavigation();
    });
  });

  describe('Links Page', () => {
    beforeEach(() => {
      cy.visit('/links');
      cy.get('.background', { timeout: 15000 })
        .should('be.visible')
        .then(($el) => {
          const url = $el.css('background-image').match(/url\("(.*)"\)/)[1];
          cy.request({ url })
            .its('status')
            .should('eq', 200);
        });
    });

    it('should display links page content', () => {
      cy.checkPageTitle('Links - Elio Di Nino');
      cy.checkProfileImage();
      cy.contains('Elio Di Nino').should('be.visible');
      cy.get('.frostedGlass').should('be.visible');
    });

    it('should have all navigation buttons', () => {
      cy.get('a[href="/"]').contains('Website').should('be.visible');
      cy.get('a[href="/contact"]').contains('Contact').should('be.visible');
      cy.checkMediaLinks();
      cy.checkExternalLink('https://photography.eliodinino.com');
      cy.checkExternalLink('https://www.instagram.com/eliodinino/');
    });

    it('should load background image', () => {
      cy.get('.background')
        .should('have.css', 'background-image')
        .and('include', 'url');
    });

    it('should not show header/footer', () => {
      cy.get('nav').should('not.exist');
      cy.get('#copyright').should('not.exist');
    });
  });
});
