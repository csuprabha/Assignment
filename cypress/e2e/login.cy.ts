/// <reference types="cypress" />

import { title } from "process";
import { login_locator } from "./page/login"

describe('Login functionaility works as expected', () => {
  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
  })

  it('should login successfully and able to view account details', () => {
    cy.request('POST',Cypress.env("baseUrl")+"/customer/account/loginPost/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/" , {
        form_key: Cypress.env('form_key'),
        username: Cypress.env('userEmail'),
        password : Cypress.env('pass'),
      }).then((response) => {
        cy.setCookie('sessionId', 'c66b921e82f2aaf94b052d9ce51867b5')
        cy.setCookie('private_content_version','a318fb1233e136e8d3370f35e8317d83')
        cy.setCookie('form_key', 'ZDzDEDnx5OEu3SJW')
       cy.setCookie('X-Magento-Vary','20b556236a9f73d55ee9ffb5a21ffc45a5f6d878')
      })


     cy.reload();
    cy.get(login_locator.switch).first().click();

    cy.get('a').should('contain.text','Sign Out')
   
  })

  
})
