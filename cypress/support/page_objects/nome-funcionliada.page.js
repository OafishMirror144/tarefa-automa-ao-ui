class compraCompleta {

    visitarUrl(){
        cy.visit('produtos')
    }
    visitarUrlcarrinho(){
        cy.visit('carrinho')
    }
    buscarProduto(nomeProduto){
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
    }

    PesquisarProdutos(nomeProduto){
        cy.get('[name="s"]').eq(0).type(nomeProduto)
        cy.get('.button-search').eq(0).click()
    }
    addProdutoCarrinho(tamanho, cor, quantidade){
        cy.get('.button-variable-item-' + tamanho).click().click()    
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    }
}

export default new compraCompleta