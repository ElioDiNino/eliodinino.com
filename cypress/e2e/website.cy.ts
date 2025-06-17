/// <reference types="cypress" />

describe('Website Functionality Tests', () => {
  describe('Navigation & Routing', () => {
    it('should navigate between pages', () => {
      // Start at home
      cy.visit('/');
      cy.url().should('eq', Cypress.config().baseUrl + '/');

      // Navigate to contact
      cy.get('a[href="/contact"]').filter(':visible').first().click();
      cy.url().should('eq', Cypress.config().baseUrl + '/contact');
      cy.get('input[name="user_name"]').should('be.visible');

      // Navigate back to home
      cy.get('a[href="/"]').filter(':visible').first().click();
      cy.url().should('eq', Cypress.config().baseUrl + '/');
      cy.contains('Hi there!').should('be.visible');
    });

    it('should handle redirects and 404s', () => {
      // Test /home redirect
      cy.visit('/home');
      cy.url().should('eq', Cypress.config().baseUrl + '/');

      // Test 404 page
      cy.visit('/invalid-route');
      cy.contains('404').should('be.visible');
      cy.contains("Whoops, it looks like you've hit a dead end!").should(
        'be.visible',
      );

      // Navigate back from 404
      cy.get('a[href="/"]').contains('Take Me Home').click();
      cy.url().should('eq', Cypress.config().baseUrl + '/');
    });

    it('should handle browser navigation', () => {
      cy.visit('/');
      cy.get('a[href="/contact"]').filter(':visible').first().click();

      cy.go('back');
      cy.url().should('eq', Cypress.config().baseUrl + '/');

      cy.go('forward');
      cy.url().should('include', '/contact');
    });
  });

  describe('Performance & Accessibility', () => {
    it('should load pages efficiently', () => {
      const pages = ['/', '/contact', '/links'];

      pages.forEach((page) => {
        cy.window().then((win) => {
          const startTime = win.performance.now();
          cy.visit(page).then(() => {
            const loadTime = win.performance.now() - startTime;
            expect(loadTime).to.be.lessThan(3000);
          });
        });
      });
    });

    it('should have proper accessibility attributes', () => {
      cy.visit('/');

      // All images should have alt text
      cy.get('img').each(($img) => {
        cy.wrap($img).should('have.attr', 'alt').and('not.be.empty');
      });

      // Should support keyboard navigation - make sure we're selecting a single element
      cy.get('a[href="/contact"]')
        .first()
        .then(($el) => {
          if ($el.length === 1) {
            cy.wrap($el).focus().should('be.focused');
          }
        });

      // Should have proper heading structure
      cy.get('h1, h2, h3, h4, h5, h6').should('exist');
    });

    it('should have proper meta tags', () => {
      cy.visit('/');
      cy.title().should('not.be.empty');
      cy.get('head meta[name="viewport"]').should('exist');
    });
  });

  describe('Responsive Design', () => {
    const viewports = [
      { name: 'Mobile', width: 375, height: 667 },
      { name: 'Tablet', width: 768, height: 1024 },
      { name: 'Desktop', width: 1200, height: 800 },
    ];

    viewports.forEach((viewport) => {
      it(`should work on ${viewport.name} (${viewport.width}x${viewport.height})`, () => {
        cy.viewport(viewport.width, viewport.height);

        // Test home page
        cy.visit('/');
        cy.contains('Hi there!').should('be.visible');
        cy.checkProfileImage();

        // Test navigation elements existence without interacting with them
        if (viewport.width <= 600) {
          cy.checkMobileNavigation();
        } else {
          cy.checkDesktopNavigation();
        }

        // Test contact page
        cy.visit('/contact');
        cy.get('input[name="user_name"]').should('be.visible');

        // Test links page
        cy.visit('/links');
        cy.get('.background', { timeout: 15000 }).should('exist'); // Just check existence
        cy.contains('Website').should('exist'); // Check for text without visibility
      });
    });
  });

  describe('Edge Cases', () => {
    it('should handle form state during viewport changes', () => {
      cy.visit('/contact');
      cy.fillContactForm('Test User', 'test@example.com', 'Test message');

      cy.viewport('samsung-s10');
      cy.get('input[name="user_name"]').should('have.value', 'Test User');

      cy.viewport(1200, 800);
      cy.get('input[name="user_name"]').should('have.value', 'Test User');
    });

    it('should handle page refresh', () => {
      cy.visit('/contact');
      cy.fillContactForm('Test User', 'test@example.com', 'Test message');

      cy.reload();
      cy.get('input[name="user_name"]').should('have.value', '');
    });
  });
});
