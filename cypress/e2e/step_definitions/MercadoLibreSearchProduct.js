import { Given, When, Then }
    from "@badeball/cypress-cucumber-preprocessor";
import { mercadoLibreHomePage } from '@pages/MercadoLibreHomePage'
import { mercadoLibreListProductsPage } from "@pages/MercadoLibreListProductsPage";
import { mercadoLibreProductPage } from "@pages/MercadoLibreProductPage";
  
Given("The user accesses the Mercado Libre website", () => {
    cy.visit("/");
});

When("The homepage loads correctly", () => {
    mercadoLibreHomePage.serviceHomePageIsVisible();
});

When("The user enters {string} in the search field", (searchProduct) => {
    mercadoLibreHomePage.serviceAddProduct(searchProduct);
});

When('The user performs the search', () => {
    mercadoLibreHomePage.serviceSearchProduct();
})

When('The system should display a list of related products', () => {
    mercadoLibreListProductsPage.serviceListProductsPageIsVisible();
})

When('The user selects a product from the list', () => {
    mercadoLibreListProductsPage.serviceSearchProduct();
})

Then('The selected product should be {string}', (titleProduct) => {
    mercadoLibreProductPage.serviceTitleContainsExpectedText(titleProduct);
})