/// <reference types="Cypress" />
class searchItem
{
    fillSearch(value) {
        const field = cy.get('#q').clear();

        field.clear().type(value);
        return this;
    }

    searchButton(){
        const button = cy.get('.search-box__button--1oH7');
        button.click();
    }
}
export default searchItem;