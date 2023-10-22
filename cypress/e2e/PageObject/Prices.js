/// <reference types="Cypress" />

class PriceCondition {
    minPrice(value) {
        const field = cy.get('.filter-price__input--InSAj[placeholder="Min"]').clear();
        field.clear().type(value);
        return this;
    }

    maxPrice(value) {
        const field = cy.get('.filter-price__input--InSAj[placeholder="Max"]').clear();
        field.clear().type(value);
        return this;
    }

    applyButton() {
        const button = cy.get('.ant-btn');
        button.click();
    }
}

export default PriceCondition;
