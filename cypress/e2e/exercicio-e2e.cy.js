/// <reference types="cypress" />
import compraCompleta from "../support/page_objects/compraCompleta"
import CheckoutPage from "../support/page_objects/CheckoutPage";


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
     /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
    compraCompleta.visitarUrl() });

      it('adicionar 4 produtos diferentes no carrinho', () => {
        cy.fixture('produtos').then(dados =>{

            compraCompleta.buscarProduto(dados[1].nomeProduto)
            compraCompleta.addProdutoCarrinho(
                 dados[1].tamanho,
                 dados[1].cor,
                 dados[1].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)


            compraCompleta.buscarProduto(dados[5].nomeProduto)
            compraCompleta.addProdutoCarrinho(
                 dados[5].tamanho,
                 dados[5].cor,
                 dados[5].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[5].nomeProduto)

            compraCompleta.buscarProduto(dados[0].nomeProduto)
            compraCompleta.addProdutoCarrinho(
                 dados[0].tamanho,
                 dados[0].cor,
                 dados[0].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)

            compraCompleta.buscarProduto(dados[4].nomeProduto)
            compraCompleta.addProdutoCarrinho(
                dados[4].tamanho,
                dados[4].cor,
                dados[4].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[4].nomeProduto)

            CheckoutPage.visitarUrl()
            CheckoutPage.completarLogin()
            cy.wait(5000)
            cy.get('.woocommerce-notice').should('contain','Obrigado. Seu pedido foi recebido.')



        })
    });



  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
      //TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizações
      cy.fixture('produtos').then(dados =>{

        compraCompleta.buscarProduto(dados[1].nomeProduto)
        compraCompleta.addProdutoCarrinho(
             dados[1].tamanho,
             dados[1].cor,
             dados[1].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)

        CheckoutPage.visitarUrl()
        CheckoutPage.completarLogin()
        cy.get('.woocommerce-notice').should('contain','Obrigado. Seu pedido foi recebido.')
            
    })
    });


});