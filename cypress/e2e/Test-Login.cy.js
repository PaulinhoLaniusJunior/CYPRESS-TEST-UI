/// <reference types="cypress"/>
const perfil = require('../fixtures/perfil.json')
describe('Funcionalidade: Login', () => {

  beforeEach(() => {
    cy.visit('minha-conta')
  });

  it('Deve fazer login com sucesso', () => {

    cy.get('[name="username"]').type('Robert.Dickinson47@example.net')
    cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('123456')
    cy.get('[name="login"]').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
  })

  it('Deve fazer login com sucesso - usando massa de dados', () => {
    cy.get('[name="username"]').type(perfil.usuario)
    cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type(perfil.senha)
    cy.get('[name="login"]').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
  });

  it('Deve fazer login com sucesso - usando fixture', () => {
    cy.fixture('perfil').then(dados => {
      cy.get('[name="username"]').type(dados.usuario, {log: false})
      cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type(dados.senha, {log: false})
      cy.get('[name="login"]').click()

      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
    })
  });

  it('Deve fazer login com sucesso - usando comandos customizados', () => {
    cy.login('Robert.Dickinson47@example.net', '123456')

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
  });
})