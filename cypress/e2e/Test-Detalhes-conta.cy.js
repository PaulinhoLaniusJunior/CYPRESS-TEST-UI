/// <reference types="cypress"/>

const { faker } = require("@faker-js/faker");

describe('Funcionalidade: Detalhes da conta', () => {

    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(login => {
            cy.login(login.usuario, login.senha)
        })
    })

    it('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta(faker.person.firstName(), faker.person.lastName(), faker.person.fullName())
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
})