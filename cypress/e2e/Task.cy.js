/// <reference types="Cypress" />
import LoginPage from "./PageObject/Login";
import searchItem from "./PageObject/Search";
import priceCondition from "./PageObject/Prices";


describe('Login Test Suite', function () {
  beforeEach(function () {
    // Set the viewport to match an iPad Air in horizontal orientation
    cy.viewport('ipad-2', 'landscape');
});
    it('Login Test', function () {
        const lp = new LoginPage();

        lp.visit('https://www.daraz.pk');
        // Cypress code to visit the login page
        lp.clickLogin();
         // Cypress code to fill in email and password fields
        lp.fillEmail(''); //Add Register Email
        lp.fillPassword(''); //Password
        // Cypress code to click the login button
        lp.submit();
        // Cypress code to click on the search field
        const sp = new searchItem();
        sp.fillSearch('Samsung');
        // Fill in the search field with "Samsung"
         sp.searchButton();
             // Apply price filters
        const pc = new priceCondition();
        pc.minPrice('25000');
        pc.maxPrice('80000');
        pc.applyButton();
        // Add the filtered Samsung mobiles to the cart
        cy.get('.product-card')
        .each((productCard) => {
          const productName = productCard.find('.product-name').text();
          const productPrice = parseInt(productCard.find('.product-price').text().replace('PKR ', '').replace(/,/g, ''));
  
          if (productPrice > 25000 && productPrice < 80000) {
            productCard.find('button[name="addToCart"]').click();
          }
        });
  
      // Go to the checkout screen
      cy.get('a[name="goToCheckout"]').click();
  
      // Update the quantity for a phone model in the cart
      cy.get('div.cart-item')
        .eq(0) // Adjust the index to select the desired item in the cart
        .find('input[name="quantity"]')
        .clear()
        .type('5');
  
     
  
     
    });
  })



