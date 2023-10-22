/// <reference types="Cypress" />

class LoginPage {
    visit() {
        cy.visit('https://www.daraz.pk');
    }

    clickLogin() {
        cy.get('#anonLogin > .bld-txt').click();
    }

    fillEmail(value) {
        const field = cy.get('div.mod-login-col1 input[type="text"]').clear();

        field.clear().type(value);
        return this;
    }

    fillPassword(value) {
        const field = cy.get('div.mod-login-col1 input[type="password"]').clear();
        ;
        field.clear().type(value);
        return this;
    }

    submit() {
        const button = cy.get('[type=submit]');
        button.click();
    }
}

export default LoginPage;
