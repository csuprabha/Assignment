/// <reference types="cypress" />

import { title } from "process";
import { search_locator } from "./page/search"

describe('Search should return correct result', () => {
  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
    // cy.visit('https://magento.softwaretestingboard.com')
  })

  it('should be able to verify that correct number of products are returned', () => {

    cy.request(Cypress.env("baseUrl")+"/catalogsearch/result/?q=+Fusion+Backpack")
    .should((response) => {
      expect(response.status).to.eq(200)
      expect(response).to.have.property('headers')
      expect(response).to.have.property('duration')
      expect(response).to.have.property('body')
    
    });
    cy.get(search_locator.search).type("Fusion Backpack")
    cy.get(search_locator.search_action).click();
    cy.get(search_locator.product).children().should('have.length', 5)

  })

  
})
