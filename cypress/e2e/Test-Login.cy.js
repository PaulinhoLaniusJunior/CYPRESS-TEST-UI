/// <reference types="cypress"/>
describe('Funcionalidade: Login', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });

  it('Deve fazer login com sucesso', () => {

    cy.get('[name="username"]').type('Robert.Dickinson47@example.net')
    cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('123456')
    cy.get('[name="login"]').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
  })
})