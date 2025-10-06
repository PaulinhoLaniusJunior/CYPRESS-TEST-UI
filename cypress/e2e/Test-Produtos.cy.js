/// <reference types="cypress"/>

import produtosPage from "../support/page-objects/produtos.page";

describe('Funcionalidade: Lista de Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Apollo Running Short')
        cy.get('#tab-title-description > a').should('contain','Descrição')
    });

    it('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProduto('Eos V-Neck Hoodie')
        cy.get('.product_title').should('contain', 'Eos V-Neck Hoodie')
    });

    it('Deve visitar a página de um produto', () => {
        produtosPage.visitarProduto('Eos V-neck Hoodie')
        cy.get('.product_title').should('contain', 'Eos V-Neck Hoodie')
    });

    it('Deve adicionar um produto ao carrinho', () => {
        produtosPage.buscarProduto('Eos V-neck Hoodie')
        produtosPage.addProdutoCarrinho('M', 'Blue', 5)
        cy.get('.woocommerce-message').should('contain', '5 × “Eos V-Neck Hoodie” foram adicionados no seu carrinho.')
    });

    it.only('Deve adicionar um produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
        produtosPage.buscarProduto(dados[1].nomeProduto)
        produtosPage.addProdutoCarrinho(dados[1].tamanho, dados[1].cor, dados[1].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
        })
    });
});