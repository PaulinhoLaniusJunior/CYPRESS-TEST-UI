/// <reference types="cypress"/>

const { faker } = require("@faker-js/faker");

describe('Funcionalidade: Register', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Deve fazer o cadastro com sucesso', () => {
        cy.get('[name="email"]').type(faker.internet.exampleEmail())
        cy.get('.register > :nth-child(2) > [name="password"]').type('123456')
        cy.get('[name="register"]').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
    });
});