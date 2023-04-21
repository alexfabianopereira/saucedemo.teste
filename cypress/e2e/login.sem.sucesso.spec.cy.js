/// <reference types="Cypress" />


describe('Acesso saucedemo', function() {
  it("Acesso Saudecemo", () => {
    cy.visit('https://www.saucedemo.com')
    //cy.title().should('eq',"Swag Labs")

    })
    
  it('validar login sem sucesso', function() {
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauc')
      cy.get('#login-button').click()
     // .should('chainer')  
       
    })
   
})  
