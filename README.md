# Projeto de Testes de UI com Cypress (CYPRESS-TEST-UI)

<p align="center">
  <img src="https://cdn.worldvectorlogo.com/logos/cypress-1.svg" width="150" alt="Cypress Logo">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Cypress-10.0%2B-brightgreen" alt="Cypress Version">
  <img src="https://img.shields.io/github/license/PaulinhoLaniusJunior/CYPRESS-TEST-UI" alt="Licença">
  <img src="https://img.shields.io/github/last-commit/PaulinhoLaniusJunior/CYPRESS-TEST-UI" alt="Último Commit">
</p>

## 📝 Sobre o Projeto

Este repositório contém uma suíte de testes de interface de usuário (UI) desenvolvida com o framework **Cypress**. O objetivo é automatizar a verificação de funcionalidades, garantir a qualidade e a estabilidade de uma aplicação web de forma rápida e confiável.

---

## 🚀 Tecnologias Utilizadas

* **[Cypress](https://www.cypress.io/):** Framework principal para a automação dos testes End-to-End.
* **[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript):** Linguagem de programação para a escrita dos scripts de teste.
* **[Node.js](https://nodejs.org/):** Ambiente de execução para o JavaScript e para o Cypress.
* **[NPM](https://www.npmjs.com/):** Gerenciador de pacotes para as dependências do projeto.

---

## 🏁 Como Começar

Siga as instruções abaixo para configurar e executar o projeto em sua máquina local.

### **Pré-requisitos**

Antes de começar, certifique-se de que você tem os seguintes softwares instalados:

* **Node.js** (versão 16 ou superior é recomendada)
* **Git** para clonar o repositório

### **Instalação**

Siga este guia passo a passo para colocar o ambiente de desenvolvimento para rodar.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/PaulinhoLaniusJunior/CYPRESS-TEST-UI.git](https://github.com/PaulinhoLaniusJunior/CYPRESS-TEST-UI.git)
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd CYPRESS-TEST-UI
    ```

3.  **Instale todas as dependências necessárias:**
    ```bash
    npm install
    ```
    Este comando irá baixar o Cypress e quaisquer outras dependências listadas no arquivo `package.json`.

---

## ▶️ Executando os Testes

O Cypress oferece duas maneiras principais de executar os testes:

### 1. Modo Interativo (com a UI do Cypress)

Este modo é ideal para desenvolver e depurar os testes, pois abre um navegador onde você pode ver os testes executando em tempo real.

Para abrir o Cypress Test Runner, execute o comando:
```bash
npx cypress open
