/// <reference types="cypress" />

// Full page screenshots are stitched together from viewport sized segments, so
// anything with `position: fixed` gets redrawn in every segment. Pin the header
// to the top of the page and drop the scroll to top button for the screenshot.
const unpinFixedElements = () => {
  cy.get('nav.bar').invoke('css', 'position', 'absolute');
  cy.get('.MuiFab-root').invoke('css', 'display', 'none');
};

describe('Visual Regression Tests', () => {
  it('home', () => {
    cy.visit('/');
    cy.wait(2000);
    unpinFixedElements();
    cy.compareSnapshot('home', 0.01);
  });

  it('contact', () => {
    cy.visit('/contact');
    cy.wait(2000);
    unpinFixedElements();
    cy.compareSnapshot('contact');
  });

  it('links', () => {
    cy.visit('/links');
    cy.get('.background', { timeout: 15000 }).should('be.visible');
    // The CSS background-image renders after load, so wait for it to finish fetching
    cy.window({ timeout: 15000 }).should((win) => {
      const image = win.performance
        .getEntriesByType('resource')
        .find((entry) => /lake-.+\.(avif|webp|jpg)$/.test(entry.name));
      expect(image, 'background image request').to.exist;
      expect(image!.responseEnd, 'background image loaded').to.be.greaterThan(
        0,
      );
    });
    cy.compareSnapshot('links');
  });
});
