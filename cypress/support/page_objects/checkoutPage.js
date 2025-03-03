class checkoutPage{


visitarUrl(){
    cy.visit('carrinho')
}

completarLogin(){

    cy.get('.checkout-button').click()
    cy.get('.showlogin').click()
    cy.get('#username').type("aluno_ebac@teste.com")
    cy.get('.woocommerce-form > .form-row-last > label').type("teste@teste.com")
    cy.get('.woocommerce-button').click()
    cy.get('#terms').check()
    cy.get('#place_order').click()

}





}
export default new checkoutPage