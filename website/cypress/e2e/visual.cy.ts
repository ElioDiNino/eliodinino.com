/// <reference types="cypress" />

describe('Visual Regression Tests', () => {
  it('home', () => {
    cy.visit('/');
    cy.wait(2000);
    cy.compareSnapshot('home', 0.01);
    cy.compareSnapshot('home-test', 0.01);
  });

  it('contact', () => {
    cy.visit('/contact');
    cy.wait(2000);
    cy.compareSnapshot('contact');
  });

  it('links', () => {
    cy.visit('/links');
    cy.get('.background', { timeout: 15000 }).should('be.visible');
    cy.compareSnapshot('links');
  });
});
