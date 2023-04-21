/// <reference types="Cypress" />


describe('Acesso saucedemo', function() {
  it("Acesso Saudecemo", () => {
    cy.visit('https://www.saucedemo.com')
    //cy.title().should('eq',"Swag Labs")

    })
    
  it('validar login sucesso', function() {
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
     // .should('chainer')  
       
    })
})  
