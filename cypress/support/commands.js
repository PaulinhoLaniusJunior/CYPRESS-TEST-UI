Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('[name="username"]').type(usuario)
    cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type(senha)
    cy.get('[name="login"]').click()
})

Cypress.Commands.add('register', (email, senha, nome, sobrenome) => {
    cy.get('[name="email"]').type(email)
    cy.get('.register > :nth-child(2) > [name="password"]').type(senha)
    cy.get('[name="register"]').click()
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('[name="account_first_name"]').type(nome)
    cy.get('[name="account_last_name"]').type(sobrenome)
    cy.get('[name="save_account_details"]').click()
})

Cypress.Commands.add('detalhesConta' , (nome, sobrenome, usuario) => {
    cy.get('[name="account_first_name"]').type(nome)
    cy.get('[name="account_last_name"]').type(sobrenome)
    cy.get('[name="account_last_name"]').type(usuario)
    cy.get('[name="save_account_details"]').click()    
})