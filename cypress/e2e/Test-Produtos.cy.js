/// <reference types="cypress"/>

describe('Funcionalidade: Lista de Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
        //.first()
        //.last()
        //.eq(5)
        .contains('Aether Gym Pant')
        .click()

        cy.get('#tab-title-description > a').should('contain','Descrição')
    });
});