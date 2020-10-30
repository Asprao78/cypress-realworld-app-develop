// @ts-check
import "@cypress/code-coverage/support";
import "@percy/cypress";
import "./commands";

Cypress.Commands.add('login',(username,password)=>{
    cy.visit('/');
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('[data-test="signin-submit"]').click();    
})
