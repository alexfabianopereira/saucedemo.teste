/// <reference types="Cypress" />


describe('Acesso saucedemo', function() {
  it("Acesso Saudecemo", () => {
    cy.visit('https://www.saucedemo.com')
    //cy.title().should('eq',"Swag Labs")

    })
    
  it('validar adicionar 2 itens no carrinho e finalizar compra', function() {
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
      cy.get('button').contains('Add to cart') .click(1)
      cy.get('button').contains('Add to cart') .click(1)
      cy.get('.shopping_cart_link').click()
      cy.get('[data-test="checkout"]').click()
      cy.get('#first-name').type('alex')
      cy.get('#last-name').type('pereira')
      cy.get('#postal-code').type('13043700')
      cy.get('[data-test="continue"]').click()
      cy.get('[data-test="finish"]').click()
       
    })
})  
