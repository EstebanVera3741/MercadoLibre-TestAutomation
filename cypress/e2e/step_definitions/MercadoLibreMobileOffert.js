import { Given, When, Then }
    from "@badeball/cypress-cucumber-preprocessor";
import { mercadoLibreHomePage } from "@pages/MercadoLibreHomePage";
import { mercadoLibreOffertPage } from "@pages/MercadoLibreOffertPage";
import { mercadoLibreProductPage } from "@pages/MercadoLibreProductPage";

When('The user selects the "Offers" button in the navigation', () => {
    mercadoLibreHomePage.serviceSelectBottomNav(0);
});

When('The user selects the Cellphones icon', () => {
    mercadoLibreOffertPage.serviceIconPageIsVisible();
    mercadoLibreOffertPage.serviceSelectIconImg();
});

When('The user navigates to the filters section', () => {
    mercadoLibreOffertPage.serviceInputBottomFilterIsVisible();
});

When('The user enters a minimum amount of {int} and a maximum amount of {int} pesos', (minValue, maxValue) => {
    mercadoLibreOffertPage.serviceAddValueFilter(minValue, maxValue);
});

Then('The system displays a list of cellphones on offer within the price range', () => {
    mercadoLibreOffertPage.serviceVerifityListMobile(0);
});

When('The user selects the first cellphone option from the list', () => {
    mercadoLibreOffertPage.serviceSelectProduct(0);
});

Then('The user verifies the description of the selected product', () => {
    mercadoLibreProductPage.serviceDescriptionProduct();
});