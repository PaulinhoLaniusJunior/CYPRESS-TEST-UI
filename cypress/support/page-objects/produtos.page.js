class ProdutosPage{

    visitarUrl() {
        cy.visit('produtos')
    }

    buscarProduto(nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
    }

    buscarProdutoLista(nomeProduto) {
        cy.get('.products > .row')
        .contains(nomeProduto)
        .click()
    }

    visitarProduto(nomeProduto) {
        // cy.visit(`produtos/${nomeProduto}` )
        const urlFormatada = nomeProduto.replace(/ /g, '-')
        cy.visit(`produtos/${urlFormatada}` )
    }

    addProdutoCarrinho(tamanho, cor, quantidade) {
        cy.wait(1000)
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get('.button-variable-item-' + cor).should('be.visible').click()
        cy.get('[name="quantity"]').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    }
}

export default new ProdutosPage()