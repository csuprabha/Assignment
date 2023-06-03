/// <reference types="cypress" />

import { title } from "process";
import { home_locator } from "./page/home"

describe('Homepage loads successfully and contains all Expected Elements.', () => {
  beforeEach(() => {
    // cy.visit('https://magento.softwaretestingboard.com')
    cy.visit(Cypress.env("baseUrl"));
  })

  it('should load home page successfully', () => {
   
    cy.request(Cypress.env("baseUrl"))
    .should((response) => {
      expect(response.status).to.eq(200)
    });
  cy.get(home_locator.content).should('be.visible');
   cy.get(home_locator.logo).should('be.visible');
   cy.get(home_locator.shop).should('have.text','Shop New Yoga')
   
  })

  
})
